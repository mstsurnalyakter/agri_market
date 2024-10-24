import List from '@/components/shared/List';
import React from 'react'

const FarmerInfoNavLink = () => {
  return (
    <>
      <List label="Farmers Information" address="/dashboard/farmers/farmer-information" />
      <List label="Add Farmer" address="/dashboard/farmers/add-farmer" />
      <List label="Support" address="/dashboard/farmers/support" />
    </>
  );
}

export default FarmerInfoNavLink