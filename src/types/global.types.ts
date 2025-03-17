import { Card } from './card.types';
import { Company } from './company.types';
import { Invoice } from './invoice.types';
import { Transaction } from './transaction.types';

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    code: string;
  };
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface DashboardData {
  company: Company;
  card: Card;
  invoice?: Invoice;
  transactions: Transaction[];
  totalTransactions: number;
}
