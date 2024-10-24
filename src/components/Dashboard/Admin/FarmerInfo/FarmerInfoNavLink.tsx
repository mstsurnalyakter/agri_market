import List from '@/components/shared/List';
import React from 'react'

const FarmerInfoNavLink = () => {
  return (
    <>
      <List
        label="Farmers Information"
        address="/dashboard/admin/farmers/farmer-information"
      />
      <List label="Add Farmer" address="/dashboard/admin/farmers/add-farmer" />
      <List label="Support" address="/dashboard/admin/farmers/support" />
    </>
  );
}

export default FarmerInfoNavLink