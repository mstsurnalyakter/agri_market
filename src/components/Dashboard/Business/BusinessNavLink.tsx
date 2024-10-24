import List from '@/components/shared/List';
import React from 'react'

const BusinessNavLink = () => {
  return (
    <>
      <List label="Add to Cart" address="/dashboard/add-to-cart" />
      <List label="Order Lists" address="/dashboard/order-lists" />
      <List label="Payment History" address="/dashboard/payment-history" />
      <List label="Support" address="/dashboard/support" />
    </>
  );
}

export default BusinessNavLink