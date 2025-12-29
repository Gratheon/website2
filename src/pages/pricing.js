import React from 'react';
import Layout from '@theme/Layout';
import CustomPricingPage from '../components/CustomPricingPage';

export default function Pricing() {
  return (
    <Layout
      title="Pricing"
      description="Pricing plans for Gratheon products and services"
      wrapperClassName="pricing-page-no-sidebar"
      noFooter={false}>
      <CustomPricingPage />
    </Layout>
  );
}
