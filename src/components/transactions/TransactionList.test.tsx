import React from 'react';
import { render, screen, fireEvent } from '../../test-utils';
import TransactionList from './TransactionList';
import { Transaction } from 'types/transaction.types';

const mockTransactions: Transaction[] = [
  {
    id: 'trans-001',
    companyId: 'company-001',
    cardId: 'card-001',
    amount: 1500,
    currency: 'kr',
    description: 'Office supplies',
    merchant: 'Office Depot',
    category: 'Office',
    transactionDate: '2023-04-01T09:30:00.000Z',
    status: 'completed',
    dataPoints: 150,
    createdAt: '2023-04-01T09:30:00.000Z',
    updatedAt: '2023-04-01T09:30:00.000Z',
  },
  {
    id: 'trans-002',
    companyId: 'company-001',
    cardId: 'card-001',
    amount: 2200,
    currency: 'kr',
    description: 'Client dinner',
    merchant: 'Restaurant ABC',
    category: 'Entertainment',
    transactionDate: '2023-04-03T19:15:00.000Z',
    status: 'completed',
    dataPoints: 220,
    createdAt: '2023-04-03T19:15:00.000Z',
    updatedAt: '2023-04-03T19:15:00.000Z',
  },
];

describe('TransactionList', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('renders a list of transactions', () => {
    render(
      <TransactionList
        transactions={mockTransactions}
        totalTransactions={mockTransactions.length}
      />,
    );

    expect(screen.getByText('Office Depot')).toBeInTheDocument();
    expect(screen.getByText('Restaurant ABC')).toBeInTheDocument();
    expect(screen.getByText('1,500 kr')).toBeInTheDocument();
    expect(screen.getByText('2,200 kr')).toBeInTheDocument();
  });

  test('displays "more items" button when there are more transactions', () => {
    render(<TransactionList transactions={mockTransactions} totalTransactions={5} />);

    const moreButton = screen.getByText('3 more items in transaction view');
    expect(moreButton).toBeInTheDocument();

    // Click the button
    fireEvent.click(moreButton);

    // Verify console.log was called
    expect(console.log).toHaveBeenCalledWith('View more transactions clicked');
  });

  test('does not display "more items" button when all transactions are shown', () => {
    render(
      <TransactionList
        transactions={mockTransactions}
        totalTransactions={2} // Total is 2 and we're showing 2
      />,
    );

    // The button should not exist
    expect(screen.queryByText(/more items in transaction view/)).not.toBeInTheDocument();
  });
});
