import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardActivation from './CardActivation';

describe('CardActivation', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders activate card button', () => {
    render(<CardActivation />);

    expect(screen.getByText('Activate card')).toBeInTheDocument();
  });

  test('logs to console when clicked', () => {
    render(<CardActivation />);

    fireEvent.click(screen.getByText('Activate card'));

    expect(console.log).toHaveBeenCalledWith('Activate card clicked');
  });
});
