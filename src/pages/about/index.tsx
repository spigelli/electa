import { Title } from '@mantine/core';
import { ReactElement } from 'react';
import { StorefrontLayout } from '../../layouts/StorefrontLayout/StorefrontLayout';
import { NextPageWithLayout } from '../_app';

export const AboutPage: NextPageWithLayout = () => {
  return (
    <Title>About</Title>
  )
}

AboutPage.getLayout = (page: ReactElement) => (
  <StorefrontLayout>
    {page}
  </StorefrontLayout>
)

export default AboutPage;
