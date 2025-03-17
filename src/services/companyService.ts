import { Company } from 'types/company.types';
import { DashboardData } from '../types/global.types';
import { get } from './api';

export const getCompanies = () => {
  return get<Company[]>('/companies');
};

export const getCompanyById = (id: string) => {
  return get<Company>(`/companies/${id}`);
};

export const getCompanyDashboard = (id: string) => {
  return get<DashboardData>(`/companies/${id}/dashboard`);
};
