import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import InvoiceDetails from './InvoiceDetails';
import { Invoice } from '../../types/invoice.types';

// Create a mock invoice
const mockInvoice: Invoice = {
  id: 'invoice-001',
  companyId: 'company-001',
  invoiceNumber: 'INV-2023-001',
  amount: 2500,
  currency: 'kr',
  dueDate: '2023-05-15T00:00:00.000Z',
  status: 'pending',
  createdAt: '2023-04-15T08:30:00.000Z',
  updatedAt: '2023-04-15T08:30:00.000Z',
};

describe('InvoiceDetails', () => {
  test('InvoiceDetails component exists', () => {
    expect(InvoiceDetails).toBeDefined();
  });

  test('renders basic invoice information', () => {
    const { getByText } = render(<InvoiceDetails invoice={mockInvoice} />);

    expect(getByText('Invoice due')).toBeInTheDocument();

    expect(getByText('2,500 kr')).toBeInTheDocument();
  });

  test('logs to console when clicked', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    const { getByText } = render(<InvoiceDetails invoice={mockInvoice} />);

    getByText('Invoice due').click();

    expect(consoleSpy).toHaveBeenCalledWith('Invoice details clicked');

    consoleSpy.mockRestore();
  });
});
