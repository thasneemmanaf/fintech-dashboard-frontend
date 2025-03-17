import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalContext';
import { CompanyProvider } from './context/CompanyContext';

// Define provider props interface
interface AllProvidersProps {
  children: React.ReactNode;
}

// Create component wrapping all providers
const AllProviders: React.FC<AllProvidersProps> = ({ children }) => {
  return (
    <GlobalProvider>
      <CompanyProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </CompanyProvider>
    </GlobalProvider>
  );
};

// Define custom render function
const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllProviders, ...options });

// Re-export everything
export * from '@testing-library/react';

// Override render method
export { customRender as render };
