import React from 'react';
import { Button } from 'antd';

const Support: React.FC = () => {
  const handleSupportClick = () => {
    console.log('Contact support clicked');
  };

  return (
    <Button block onClick={handleSupportClick} className="support-button">
      Contact XYZ&apos;s support
      <style>{`
        .support-button {
          height: 44px;
          font-size: 16px;
          border-radius: 6px;
          background-color: #1f2937;
          border: none;
          color: white;
          margin: 0 4px;
          width: calc(100% - 8px);
        }

        .support-button:hover,
        .support-button:focus {
          background-color: #4b5563;
          color: white;
        }
      `}</style>
    </Button>
  );
};

export default Support;
