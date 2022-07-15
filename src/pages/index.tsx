import { ReactElement } from 'react';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import {
  StorefrontLayout
} from '../layouts/StorefrontLayout/StorefrontLayout';
import { NextPageWithLayout } from './_app';

export const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}

HomePage.getLayout = (page: ReactElement) => (
  <StorefrontLayout>
    {page}
  </StorefrontLayout>
)

export default HomePage;
