import React from 'react';
import { List, Row, Col, Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { Transaction } from '../../types/transaction.types';
import TransactionItem from './TransactionItem';

interface TransactionListProps {
  transactions: Transaction[];
  totalTransactions: number;
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions, totalTransactions }) => {
  const handleViewMoreClick = () => {
    console.log('View more transactions clicked');
  };

  // Calculate how many more transactions are available
  const remainingTransactions = totalTransactions - transactions.length;

  return (
    <div className="transactions-container">
      <div className="transactions-wrapper">
        <List
          className="transactions-list"
          dataSource={transactions}
          renderItem={(transaction) => (
            <TransactionItem key={transaction.id} transaction={transaction} />
          )}
        />
        {remainingTransactions > 0 && (
          <Button type="text" onClick={handleViewMoreClick} className="view-more-button">
            <Row justify="space-between" align="middle">
              <Col>{remainingTransactions} more items in transaction view</Col>
              <Col>
                <RightOutlined />
              </Col>
            </Row>
          </Button>
        )}
      </div>

      <style>{`
      .transactions-container {
        margin: 0 4px;
      }
      
      .transactions-wrapper {
        min-height: 200px;
        transition: all 0.3s ease;
      }
      
      .view-more-button {
        width: 100%;
        text-align: center;
        border: 1px solid #e6e6e6;
        margin-top: 8px;
        height: 44px;
      }
    `}</style>
    </div>
  );
};

export default TransactionList;
