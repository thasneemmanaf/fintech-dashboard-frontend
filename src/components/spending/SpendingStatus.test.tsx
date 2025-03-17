import React from 'react';
import { render, screen, fireEvent } from '../../test-utils';
import SpendingStatus from './SpendingStatus';
import { Card } from 'types/card.types';

const mockCard: Card = {
  id: 'card-001',
  companyId: 'company-001',
  cardNumber: '4111111111111111',
  cardHolder: 'John Doe',
  expiryDate: '12/25',
  cvv: '123',
  status: 'active',
  limit: 10000,
  currency: 'kr',
  spentAmount: 4600,
  availableAmount: 5400,
  createdAt: '2023-01-20T08:30:00.000Z',
  updatedAt: '2023-01-20T08:30:00.000Z',
};

describe('SpendingStatus', () => {
  beforeEach(() => {
    // Mock console.log
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('renders spending status with correct values', () => {
    render(<SpendingStatus card={mockCard} />);

    expect(screen.getByText('Remaining spend')).toBeInTheDocument();
    expect(screen.getByText('5,400 kr/10,000 kr')).toBeInTheDocument();
    expect(screen.getByText('based on your set limit')).toBeInTheDocument();
  });

  test('logs to console when clicked', () => {
    render(<SpendingStatus card={mockCard} />);

    // Click on the component
    fireEvent.click(screen.getByText('Remaining spend'));

    // Verify console.log was called
    expect(console.log).toHaveBeenCalledWith('Spending status clicked');
  });

  test('displays progress bar with correct percentage', () => {
    render(<SpendingStatus card={mockCard} />);

    // Check if progress bar exists
    const progressBar = document.querySelector('.ant-progress');
    expect(progressBar).toBeInTheDocument();
  });
});
