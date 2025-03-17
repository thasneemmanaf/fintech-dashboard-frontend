export interface Invoice {
  id: string;
  companyId: string;
  invoiceNumber: string;
  amount: number;
  currency: string;
  dueDate: string;
  status: 'pending' | 'paid' | 'overdue';
  createdAt: string;
  updatedAt: string;
}
