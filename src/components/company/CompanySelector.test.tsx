import React from 'react';
import { render, screen, waitFor } from '../../test-utils';
import CompanySelector from './CompanySelector';
import { CompanyContext } from '../../context/CompanyContext';
import { Company } from '../../types/company.types';

const mockCompanies: Company[] = [
  {
    id: 'company-001',
    name: 'Company AB',
    organisationNumber: '550101-1111',
    status: 'active',
    createdAt: '2023-01-15T08:00:00.000Z',
    updatedAt: '2023-01-15T08:00:00.000Z',
  },
  {
    id: 'company-002',
    name: 'Tech Solutions XYZ',
    organisationNumber: '550102-2222',
    status: 'active',
    createdAt: '2023-02-20T09:30:00.000Z',
    updatedAt: '2023-02-20T09:30:00.000Z',
  },
];

const mockSelectCompany = jest.fn();
const mockContextValue = {
  state: {
    companies: mockCompanies,
    selectedCompany: mockCompanies[0],
    dashboardData: null,
  },
  dispatch: jest.fn(),
  loadCompanies: jest.fn(),
  selectCompany: mockSelectCompany,
};

describe('CompanySelector', () => {
  test('renders company selector with companies', async () => {
    render(
      <CompanyContext.Provider value={mockContextValue}>
        <CompanySelector />
      </CompanyContext.Provider>,
    );

    // Just verify that the component renders without errors
    await waitFor(() => {
      expect(screen.getByText('Company AB')).toBeInTheDocument();
    });
  });

  test('displays "No companies available" when no companies', async () => {
    // Create a NEW context value with empty companies array
    const emptyCompaniesContext = {
      ...mockContextValue,
      state: {
        ...mockContextValue.state,
        companies: [],
        // Make sure selectedCompany is null when there are no companies
        selectedCompany: null,
      },
    };

    render(
      <CompanyContext.Provider value={emptyCompaniesContext}>
        <CompanySelector />
      </CompanyContext.Provider>,
    );

    await waitFor(() => {
      expect(screen.getByText('No companies available')).toBeInTheDocument();
    });
  });
});
