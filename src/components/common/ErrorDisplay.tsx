import React from 'react';
import { Alert, Button, Space } from 'antd';
import { useGlobalContext } from '../../context/GlobalContext';

interface ErrorDisplayProps {
  message?: string;
  retry?: () => void;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message, retry }) => {
  const { state, dispatch } = useGlobalContext();

  // Use either the provided message or the one from global context
  const errorMessage = message || state.error;

  if (!errorMessage) {
    return null;
  }

  const handleDismiss = () => {
    dispatch({ type: 'SET_ERROR', payload: null });
  };

  return (
    <Alert
      message="Error"
      description={errorMessage}
      type="error"
      showIcon
      closable
      onClose={handleDismiss}
      action={
        retry && (
          <Space>
            <Button size="small" onClick={retry}>
              Retry
            </Button>
          </Space>
        )
      }
    />
  );
};

export default ErrorDisplay;
