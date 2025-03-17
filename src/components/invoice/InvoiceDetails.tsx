import React from 'react';
import { Card, Typography, Row, Col } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { Invoice } from '../../types/invoice.types';

const { Text } = Typography;

interface InvoiceDetailsProps {
  invoice: Invoice;
}

const InvoiceDetails: React.FC<InvoiceDetailsProps> = ({ invoice }) => {
  const handleInvoiceClick = () => {
    console.log('Invoice details clicked');
  };

  // Format date to a more readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Card onClick={handleInvoiceClick} className="h-full" styles={{ body: { padding: '16px' } }}>
      <Row align="middle" justify="space-between">
        <Col>
          <Text className="text-lg font-medium">Invoice due</Text>
        </Col>
        <Col>
          <RightOutlined />
        </Col>
      </Row>
      <div className="mt-2">
        <Row>
          <Col span={12}>
            <Text type="secondary">Due date</Text>
            <div>{formatDate(invoice.dueDate)}</div>
          </Col>
          <Col span={12} className="text-right">
            <Text type="secondary">Amount</Text>
            <div>
              <Text strong>
                {invoice.amount.toLocaleString()} {invoice.currency}
              </Text>
            </div>
          </Col>
        </Row>
      </div>
    </Card>
  );
};

export default InvoiceDetails;
