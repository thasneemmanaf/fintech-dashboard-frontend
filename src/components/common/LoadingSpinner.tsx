import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useGlobalContext } from '../../context/GlobalContext';

interface LoadingSpinnerProps {
  loading?: boolean;
  size?: 'small' | 'default' | 'large';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  loading: propLoading,
  size = 'default',
}) => {
  const { state } = useGlobalContext();

  // Use either the provided loading state or the one from global context
  const loading = propLoading !== undefined ? propLoading : state.loading;

  if (!loading) {
    return null;
  }

  const antIcon = (
    <LoadingOutlined
      style={{ fontSize: size === 'small' ? 16 : size === 'large' ? 40 : 24 }}
      spin
    />
  );

  return (
    <div className="flex justify-center items-center min-h-48">
      <Spin indicator={antIcon} size={size} />
    </div>
  );
};

export default LoadingSpinner;
