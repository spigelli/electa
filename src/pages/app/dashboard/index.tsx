import { ReactElement } from 'react';
import {
  AppLayout
} from '../../../layouts/AppLayout/AppLayout';
import { NextPageWithLayout } from '../../_app';

export const Dashboard: NextPageWithLayout = () => {
  return (
    <>
      <h1>Dashboard</h1>
    </>
  );
}

Dashboard.getLayout = (page: ReactElement) => (
  <AppLayout>
    {page}
  </AppLayout>
)

export default Dashboard;
