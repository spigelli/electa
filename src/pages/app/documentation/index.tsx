import { ReactElement } from 'react';
import {
  AppLayout
} from '../../../layouts/AppLayout/AppLayout';
import { NextPageWithLayout } from '../../_app';

export const Documentation: NextPageWithLayout = () => {
  return (
    <>
      <h1>Documentation</h1>
    </>
  );
}

Documentation.getLayout = (page: ReactElement) => (
  <AppLayout>
    {page}
  </AppLayout>
)

export default Documentation;
