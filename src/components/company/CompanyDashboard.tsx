import React from 'react';
import { Row, Col, Card, Typography, Spin, Alert } from 'antd';
import { useCompanyContext } from '../../context/CompanyContext';
import { useGlobalContext } from '../../context/GlobalContext';
import CardDetails from '../card/CardDetails';
import InvoiceDetails from '../invoice/InvoiceDetails';
import SpendingStatus from '../spending/SpendingStatus';
import TransactionList from '../transactions/TransactionList';

const { Title } = Typography;

const CompanyDashboard: React.FC = () => {
  const { state: globalState } = useGlobalContext();
  const { state: companyState } = useCompanyContext();
  const { selectedCompany, dashboardData } = companyState;
  const { loading, error } = globalState;

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spin size="large" />
      </div>
    );
  }

  if (error) {
    return <Alert type="error" message={error} />;
  }

  if (!selectedCompany || !dashboardData) {
    return <Alert type="info" message="Please select a company to view dashboard" />;
  }

  return (
    <div className="dashboard-container">
      <Title level={5} className="mt-4">
        {selectedCompany.name}
      </Title>

      <Row gutter={[16, 16]}>
        <Col xs={24} lg={24}>
          <div className="fixed-height-card">
            <CardDetails card={dashboardData.card} />
          </div>
        </Col>

        <Col xs={24} lg={12}>
          <div className="fixed-height-card small-card">
            {dashboardData.invoice && <InvoiceDetails invoice={dashboardData.invoice} />}
          </div>
        </Col>

        <Col xs={24} lg={12}>
          <div className="fixed-height-card small-card">
            <SpendingStatus card={dashboardData.card} />
          </div>
        </Col>

        <Col xs={24}>
          <div className="fixed-height-card transaction-card">
            <Card title="Latest transactions" size="small">
              <TransactionList
                transactions={dashboardData.transactions}
                totalTransactions={dashboardData.totalTransactions}
              />
            </Card>
          </div>
        </Col>
      </Row>

      <style>{`
        .dashboard-container {
          margin-bottom: 16px;
        }
        
        .fixed-height-card {
          min-height: 200px;
          transition: all 0.3s ease;
        }
        
        .small-card {
          min-height: 150px;
        }
        
        .transaction-card {
          min-height: 250px;
        }
        
        .ant-card {
          height: 100%;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
        }
        
        @media (min-width: 992px) {
          .ant-col-lg-12 .ant-card {
          min-height: 160px;
    }
  }
      `}</style>
    </div>
  );
};

export default CompanyDashboard;
