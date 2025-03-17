import React from 'react';
import { List, Typography, Row, Col } from 'antd';
import { Transaction } from '../../types/transaction.types';

const { Text } = Typography;

interface TransactionItemProps {
  transaction: Transaction;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ transaction }) => {
  const handleTransactionClick = () => {
    console.log(`Transaction clicked: ${transaction.id}`);
  };

  // Format date for better readability
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  };

  // Format transaction amount with currency
  const formatAmount = (amount: number, currency: string) => {
    return `${amount.toLocaleString()} ${currency}`;
  };

  return (
    <List.Item onClick={handleTransactionClick} className="cursor-pointer transaction-item py-2">
      <Row className="w-full" align="middle" justify="space-between">
        <Col span={16}>
          <Text strong style={{ fontSize: '14px' }}>
            {transaction.merchant}
          </Text>
          <div>
            <Text type="secondary" style={{ fontSize: '12px' }}>
              {formatDate(transaction.transactionDate)} - {transaction.category}
            </Text>
          </div>
        </Col>
        <Col span={8} className="text-right">
          <Text strong style={{ fontSize: '14px' }}>
            {formatAmount(transaction.amount, transaction.currency)}
          </Text>
          <div>
            <Text type="secondary" style={{ fontSize: '12px' }}>
              Data points: {transaction.dataPoints}
            </Text>
          </div>
        </Col>
      </Row>
      <style>{`    
        .transaction-item:hover {
          background-color:#f5f5f5;
        }
      `}</style>
    </List.Item>
  );
};

export default TransactionItem;
