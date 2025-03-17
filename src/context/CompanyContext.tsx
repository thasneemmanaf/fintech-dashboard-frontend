import React, { createContext, useReducer, useContext, ReactNode, useEffect } from 'react';
import { DashboardData } from '../types/global.types';
import { getCompanies, getCompanyDashboard } from '../services/companyService';
import { useGlobalContext } from './GlobalContext';
import { Company } from 'types/company.types';

// Define the state type
interface CompanyState {
  companies: Company[];
  selectedCompany: Company | null;
  dashboardData: DashboardData | null;
}

// Define action types
type CompanyAction =
  | { type: 'SET_COMPANIES'; payload: Company[] }
  | { type: 'SET_SELECTED_COMPANY'; payload: Company }
  | { type: 'SET_DASHBOARD_DATA'; payload: DashboardData };

// Define the context type
interface CompanyContextType {
  state: CompanyState;
  dispatch: React.Dispatch<CompanyAction>;
  loadCompanies: () => Promise<void>;
  selectCompany: (company: Company) => Promise<void>;
}

// Create the context
export const CompanyContext = createContext<CompanyContextType | undefined>(undefined);

// Create a reducer function
const companyReducer = (state: CompanyState, action: CompanyAction): CompanyState => {
  switch (action.type) {
    case 'SET_COMPANIES':
      return {
        ...state,
        companies: action.payload,
      };
    case 'SET_SELECTED_COMPANY':
      return {
        ...state,
        selectedCompany: action.payload,
      };
    case 'SET_DASHBOARD_DATA':
      return {
        ...state,
        dashboardData: action.payload,
      };
    default:
      return state;
  }
};

// Create a provider component
interface CompanyProviderProps {
  children: ReactNode;
}

export const CompanyProvider: React.FC<CompanyProviderProps> = ({ children }) => {
  const { dispatch: globalDispatch } = useGlobalContext();

  const [state, dispatch] = useReducer(companyReducer, {
    companies: [],
    selectedCompany: null,
    dashboardData: null,
  });

  // Function to load companies
  const loadCompanies = async () => {
    globalDispatch({ type: 'SET_LOADING', payload: true });
    try {
      const response = await getCompanies();
      if (response.success && response.data) {
        dispatch({ type: 'SET_COMPANIES', payload: response.data });
        // Select first company by default if available
        if (response.data.length > 0 && !state.selectedCompany) {
          await selectCompany(response.data[0]);
        }
      } else {
        globalDispatch({
          type: 'SET_ERROR',
          payload: response.error?.message || 'Failed to load companies',
        });
      }
    } catch (error) {
      globalDispatch({
        type: 'SET_ERROR',
        payload: 'An unexpected error occurred while loading companies',
      });
    } finally {
      globalDispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  // Function to select a company and load its dashboard data
  const selectCompany = async (company: Company) => {
    dispatch({ type: 'SET_SELECTED_COMPANY', payload: company });

    try {
      const response = await getCompanyDashboard(company.id);
      if (response.success && response.data) {
        dispatch({ type: 'SET_DASHBOARD_DATA', payload: response.data });
      } else {
        globalDispatch({
          type: 'SET_ERROR',
          payload: response.error?.message || 'Failed to load dashboard data',
        });
      }
    } catch (error) {
      globalDispatch({
        type: 'SET_ERROR',
        payload: 'An unexpected error occurred while loading dashboard data',
      });
    }
  };

  // Load companies when the component mounts
  useEffect(() => {
    loadCompanies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CompanyContext.Provider
      value={{
        state,
        dispatch,
        loadCompanies,
        selectCompany,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};

// Create a custom hook for using the context
export const useCompanyContext = (): CompanyContextType => {
  const context = useContext(CompanyContext);
  if (context === undefined) {
    throw new Error('useCompanyContext must be used within a CompanyProvider');
  }
  return context;
};
