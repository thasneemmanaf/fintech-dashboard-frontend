import React from 'react';
import { Layout, Space } from 'antd';
import Header from '../components/common/Header';
import CompanySelector from '../components/company/CompanySelector';
import CompanyDashboard from '../components/company/CompanyDashboard';
import CardActivation from '../components/card/CardActivation';
import Support from '../components/common/Support';
import ErrorDisplay from '../components/common/ErrorDisplay';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { useGlobalContext } from '../context/GlobalContext';

const { Content, Footer } = Layout;

const Dashboard: React.FC = () => {
  const { state } = useGlobalContext();
  const { loading, error } = state;

  return (
    <Layout className="min-h-screen bg-white">
      <Content className="container-padding">
        <Header />

        <div className="my-3">
          <CompanySelector />
        </div>

        {error && <ErrorDisplay />}

        {loading ? <LoadingSpinner /> : <CompanyDashboard />}

        <Space direction="vertical" size="middle" className="w-full mt-4 mb-3">
          <CardActivation />
          <Support />
        </Space>
      </Content>

      <Footer className="text-center bg-white" style={{ padding: '12px 0' }}>
        <div className="text-gray-500 text-sm">Qred Fintech App © {new Date().getFullYear()}</div>
      </Footer>

      <style>{`
        .container-padding {
          padding: 16px 16px 0 16px;
          max-width: 600px;
          margin: 0 auto;
        }
        
        @media (min-width: 768px) {
          .container-padding {
            padding: 24px 24px 0 24px;
          }
        }
      `}</style>
    </Layout>
  );
};

export default Dashboard;
