import React from 'react';
import { Card, Typography, Row, Col, Tag } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { Card as CardType } from '../../types/card.types';

const { Text } = Typography;

interface CardDetailsProps {
  card: CardType;
}

const CardDetails: React.FC<CardDetailsProps> = ({ card }) => {
  const handleCardClick = () => {
    console.log('Card details clicked');
  };

  // Function to mask card number - show only last 4 digits
  const maskCardNumber = (cardNumber: string) => {
    return `**** **** **** ${cardNumber.slice(-4)}`;
  };

  return (
    <Card className="h-full" onClick={handleCardClick}>
      <div className="mb-4">
        <Row align="middle" justify="space-between">
          <Col>
            <Text className="text-lg font-medium">Wallet</Text>
          </Col>
          <Col>
            <RightOutlined />
          </Col>
        </Row>
      </div>

      <div className="card-container mt-4">
        <div className="card-wrapper">
          <div className="card-background">
            <div className="card-chip-icon">💳</div>
            <div className="card-details">
              <Text strong className="card-holder">
                {card.cardHolder}
              </Text>
              <Text className="card-number">{maskCardNumber(card.cardNumber)}</Text>

              <Row justify="space-between" className="card-footer">
                <Col>
                  <Text className="card-label">Expires</Text>
                  <div className="card-value">{card.expiryDate}</div>
                </Col>
                <Col>
                  <Text className="card-label">Status</Text>
                  <div className="card-value">
                    <Tag
                      color={
                        card.status === 'active'
                          ? 'green'
                          : card.status === 'inactive'
                          ? 'orange'
                          : 'red'
                      }
                    >
                      {card.status.toUpperCase()}
                    </Tag>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .card-container {
          position: relative;
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
        }
        
        @media (min-width: 768px) {
          .card-container {
            width: 90%;
          }
          .card-wrapper {
          min-height:220px
          }
        }
        
        .card-wrapper {
          width: 100%;
          height: 180px;
          position: relative;
          overflow: hidden;
          border-radius: 8px;
        }
        
        .card-background {
          background: linear-gradient(135deg, #2a2a72 0%, #009ffd 100%);
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 16px;
          position: relative;
        }
        
        .card-chip-icon {
          position: absolute;
          top: 16px;
          right: 30px;
          font-size: 48px;
        }
        
        .card-details {
          color: white;
          z-index: 2;
        }
        
        .card-holder {
          color: white;
          font-size: 18px;
          display: block;
          margin-bottom: 6px;
        }
        
        .card-number {
          color: rgba(255, 255, 255, 0.9);
          font-size: 15px;
          display: block;
          margin-bottom: 14px;
        }
        
        .card-footer {
          margin-top: 8px;
        }
        
        .card-label {
          color: white !important;
          font-size: 11px;
          display: block;
          opacity: 0.7;
        }
        
        .card-value {
          color: white;
          margin-top: 2px;
        }
      `}</style>
    </Card>
  );
};

export default CardDetails;
