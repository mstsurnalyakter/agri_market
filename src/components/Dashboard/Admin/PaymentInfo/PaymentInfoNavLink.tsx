import List from '@/components/shared/List';
import React from 'react'

const PaymentInfoNavLink = () => {
  return (
    <>
      <List
        label="Payment History"
        address="/dashboard/payment/payment-history"
      />
    </>
  );
}

export default PaymentInfoNavLink