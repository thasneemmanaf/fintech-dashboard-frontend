import { Transaction } from '../types/transaction.types';
import { PaginatedResponse } from '../types/global.types';
import { get } from './api';

export const getCompanyTransactions = (companyId: string, page = 1, limit = 10) => {
  return get<PaginatedResponse<Transaction>>(
    `/companies/${companyId}/transactions?page=${page}&limit=${limit}`,
  );
};
