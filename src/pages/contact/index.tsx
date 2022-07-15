import { Title } from '@mantine/core';
import { ReactElement } from 'react';
import { StorefrontLayout } from '../../layouts/StorefrontLayout/StorefrontLayout';
import { NextPageWithLayout } from '../_app';

export const ContactPage: NextPageWithLayout = () => {
  return (
    <Title>Contact</Title>
  )
}

ContactPage.getLayout = (page: ReactElement) => (
  <StorefrontLayout>
    {page}
  </StorefrontLayout>
)

export default ContactPage;
