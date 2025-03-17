export interface Card {
  id: string;
  companyId: string;
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cvv: string;
  status: 'active' | 'inactive' | 'blocked';
  limit: number;
  currency: string;
  spentAmount: number;
  availableAmount: number;
  createdAt: string;
  updatedAt: string;
}
