import React from 'react';
import { Button } from 'antd';

const CardActivation: React.FC = () => {
  const handleActivateCard = () => {
    console.log('Activate card clicked');
  };

  return (
    <Button block onClick={handleActivateCard} className="activation-button">
      Activate card
      <style>{`
        .activation-button {
          height: 44px;
          font-size: 16px;
          border-radius: 6px;
          background-color: #1f2937;
          border: none;
           color: white;
          margin: 0 4px;
          width: calc(100% - 8px);
        }

        .activation-button:hover,
        .activation-button:focus {
          background-color: #4b5563;
          color: white;
        }
      `}</style>
    </Button>
  );
};

export default CardActivation;
