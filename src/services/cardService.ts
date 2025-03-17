import { Card } from '../types/card.types';
import { get } from './api';

export const getCompanyCards = (companyId: string) => {
  return get<Card[]>(`/companies/${companyId}/cards`);
};

export const getCardById = (cardId: string) => {
  return get<Card>(`/cards/${cardId}`);
};
