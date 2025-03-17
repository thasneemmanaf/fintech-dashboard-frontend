export interface Transaction {
  id: string;
  companyId: string;
  cardId: string;
  amount: number;
  currency: string;
  description: string;
  merchant: string;
  category: string;
  transactionDate: string;
  status: 'pending' | 'completed' | 'declined';
  dataPoints: number; // Loyalty points or similar
  createdAt: string;
  updatedAt: string;
}
