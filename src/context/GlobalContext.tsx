import React, { createContext, useReducer, useContext, ReactNode } from 'react';

// Define the state type
interface GlobalState {
  loading: boolean;
  error: string | null;
}

// Define action types
type GlobalAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null };

// Define the context type
interface GlobalContextType {
  state: GlobalState;
  dispatch: React.Dispatch<GlobalAction>;
}

// Create the context
export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

// Create a reducer function
const globalReducer = (state: GlobalState, action: GlobalAction): GlobalState => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

// Create a provider component
interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, {
    loading: false,
    error: null,
  });

  return <GlobalContext.Provider value={{ state, dispatch }}>{children}</GlobalContext.Provider>;
};

// Create a custom hook for using the context
export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};
