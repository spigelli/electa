import { ReactElement } from 'react';
import {
  AppLayout
} from '../../../layouts/AppLayout/AppLayout';
import { NextPageWithLayout } from '../../_app';

export const Project: NextPageWithLayout = () => {
  return (
    <>
      <h1>Project</h1>
    </>
  );
}

Project.getLayout = (page: ReactElement) => (
  <AppLayout>
    {page}
  </AppLayout>
)

export default Project;
