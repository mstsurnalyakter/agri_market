import List from '@/components/shared/List';
import React from 'react'

const ReportInfoNavLink = () => {
  return (
    <>
      <List
        label="Sales Reports"
        address="/dashboard/reports/sales-reports"
      />
      <List
        label="Transactions Reports"
        address="/dashboard/reports/transactions-reports"
      />
    </>
  );
}

export default ReportInfoNavLink