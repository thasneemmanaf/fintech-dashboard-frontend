import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import AppRoutes from './routes/AppRoutes';
import { GlobalProvider } from './context/GlobalContext';
import { CompanyProvider } from './context/CompanyContext';
import './global.css';

// Theme configuration for Ant Design
const theme = {
  token: {
    colorPrimary: '#1a202c',
    borderRadius: 4,
  },
};

const App: React.FC = () => {
  return (
    <ConfigProvider theme={theme}>
      <GlobalProvider>
        <CompanyProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </CompanyProvider>
      </GlobalProvider>
    </ConfigProvider>
  );
};

export default App;
