import { AppShell, Container } from '@mantine/core';
import { ReactNode } from 'react';
import { appHeaderLinks } from '../../common/links';
import AppHeader
  from '../../components/AppHeader/AppHeader';
import {
  MantineLogo
} from '../../components/MantineLogo/MantineLogo';
import {
  StorefrontFooter
} from '../../components/StorefrontFooter/StorefrontFooter';

export interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({
  children,
}: AppLayoutProps) {
  return (
    <AppShell
      padding="md"
      header={
        <AppHeader
          links={appHeaderLinks}
          logo={<MantineLogo />}
          profileLinks={appHeaderLinks}
        />
      }
      styles={(theme) => ({
        root: {
          height: '100%',
        },
        body: {
          height: 'calc( 100vh - 56px )',
        },
        main: {
          backgroundColor: theme.colorScheme === 'dark'
            ? theme.colors.dark[8]
            : theme.colors.gray[0]
        },
        height: '100%',
      })}
    >
      <Container fluid p="lg">
        {children}
      </Container>
    </AppShell>
  );
}
