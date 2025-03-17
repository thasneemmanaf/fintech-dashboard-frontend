import React from 'react';
import { render, screen, fireEvent } from '../../test-utils';
import CardDetails from './CardDetails';
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

describe('CardDetails', () => {
  beforeEach(() => {
    // Mock console.log to prevent actual logging during tests
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('renders card details with masked card number', () => {
    render(<CardDetails card={mockCard} />);

    expect(screen.getByText('Wallet')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('**** **** **** 1111')).toBeInTheDocument();
    expect(screen.getByText('12/25')).toBeInTheDocument();
    expect(screen.getByText('ACTIVE')).toBeInTheDocument();
  });

  test('logs to console when card is clicked', () => {
    render(<CardDetails card={mockCard} />);

    // Click on the card
    fireEvent.click(screen.getByText('John Doe'));

    // Verify that console.log was called
    expect(console.log).toHaveBeenCalledWith('Card details clicked');
  });

  test('displays status with appropriate color', () => {
    render(<CardDetails card={mockCard} />);

    // Find the status tag (it should have "green" color for active status)
    const statusTag = screen.getByText('ACTIVE');
    expect(statusTag).toHaveClass('ant-tag-green');
  });
});
