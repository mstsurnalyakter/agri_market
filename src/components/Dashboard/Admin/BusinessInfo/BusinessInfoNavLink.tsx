import List from '@/components/shared/List'
import React from 'react'

const BusinessInfoNavLink = () => {
  return (
    <>
      <List
        label="Business Information"
        address="/dashboard/business/business-information"
      />
      <List label="Add Business" address="/dashboard/business/add-business" />
      <List label="Support" address="/dashboard/business/support" />
    </>
  );
}

export default BusinessInfoNavLink