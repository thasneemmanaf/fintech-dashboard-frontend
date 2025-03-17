export interface Company {
  id: string;
  name: string;
  organisationNumber: string;
  status: 'active' | 'inactive';
  createdAt: string;
  updatedAt: string;
}
