import React from 'react';
import { Select, Typography } from 'antd';
import { useCompanyContext } from '../../context/CompanyContext';

const { Option } = Select;
const { Text } = Typography;

const CompanySelector: React.FC = () => {
  const { state, selectCompany } = useCompanyContext();
  const { companies, selectedCompany } = state;

  const handleCompanyChange = (value: string) => {
    const company = companies.find((c) => c.id === value);
    if (company) {
      selectCompany(company);
    }
  };

  if (companies.length === 0) {
    return <Text type="secondary">No companies available</Text>;
  }

  return (
    <Select
      className="w-full"
      value={selectedCompany?.id}
      onChange={handleCompanyChange}
      placeholder="Select a company"
    >
      {companies.map((company) => (
        <Option key={company.id} value={company.id}>
          {company.name}
        </Option>
      ))}
    </Select>
  );
};

export default CompanySelector;
