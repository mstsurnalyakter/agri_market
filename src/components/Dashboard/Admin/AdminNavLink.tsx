import List from '@/components/shared/List';
import React from 'react'

const AdminNavLink = () => {
  return (
    <>
      <List label="Farmers" address="/dashboard/farmers" />
      <List label="Business" address="/dashboard/business" />
      <List label="Products" address="/dashboard/products" />
      <List label="Payment" address="/dashboard/payments" />
      <List label="Reports" address="/dashboard/reports" />
    </>
  );
}

export default AdminNavLink