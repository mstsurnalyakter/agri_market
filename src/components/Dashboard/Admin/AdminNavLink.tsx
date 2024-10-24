import List from '@/components/shared/List';
import React from 'react'

const AdminNavLink = () => {
  return (
    <>
      <List label="Farmers" address="/dashboard/admin/farmers" />
      <List label="Business" address="/dashboard/admin/business" />
      <List label="Products" address="/dashboard/admin/products" />
      <List label="Payment" address="/dashboard/admin/payment" />
      <List label="Reports" address="/dashboard/admin/reports" />
    </>
  );
}

export default AdminNavLink