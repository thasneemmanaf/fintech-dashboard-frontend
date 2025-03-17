import React from 'react';
import { Card, Typography, Progress, Row, Col } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { Card as CardType } from '../../types/card.types';

const { Text } = Typography;

interface SpendingStatusProps {
  card: CardType;
}

const SpendingStatus: React.FC<SpendingStatusProps> = ({ card }) => {
  const handleSpendingClick = () => {
    console.log('Spending status clicked');
  };

  // Calculate the percentage of the limit that's been spent
  const calculatePercentage = () => {
    return Math.round((card.spentAmount / card.limit) * 100);
  };

  // Format currency
  const formatCurrency = (amount: number) => {
    return `${amount.toLocaleString()} ${card.currency}`;
  };

  const percentage = calculatePercentage();

  return (
    <Card onClick={handleSpendingClick} className="h-full" styles={{ body: { padding: '16px' } }}>
      <Row align="middle" justify="space-between">
        <Col>
          <Text className="text-lg font-medium">Remaining spend</Text>
        </Col>
        <Col>
          <RightOutlined />
        </Col>
      </Row>
      <div className="mt-4 text-center">
        <Text className="text-xl font-medium">
          {formatCurrency(card.availableAmount)}/{formatCurrency(card.limit)}
        </Text>
        <Progress
          percent={percentage}
          showInfo={false}
          strokeColor={percentage > 80 ? 'red' : percentage > 60 ? 'orange' : 'green'}
          className="mt-2"
        />
        <Text type="secondary" className="text-sm">
          based on your set limit
        </Text>
      </div>
    </Card>
  );
};

export default SpendingStatus;
