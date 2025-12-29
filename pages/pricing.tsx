import React from 'react';
import Layout from '@theme/Layout';
import CustomPricingPage from '../src/components/CustomPricingPage';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Pricing(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
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
