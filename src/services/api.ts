import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ApiResponse } from '../types/global.types';

// Create axios instance with default config
const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Generic GET request
export const get = async <T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
  try {
    const response: AxiosResponse<ApiResponse<T>> = await api.get(url, config);
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

// Error handler helper
const handleApiError = (error: any): ApiResponse<any> => {
  if (axios.isAxiosError(error)) {
    return {
      success: false,
      error: {
        message: error.response?.data?.message || 'An error occurred',
        code: error.response?.data?.code || 'UNKNOWN_ERROR',
      },
    };
  }

  return {
    success: false,
    error: {
      message: 'An unexpected error occurred',
      code: 'UNKNOWN_ERROR',
    },
  };
};

export default api;
