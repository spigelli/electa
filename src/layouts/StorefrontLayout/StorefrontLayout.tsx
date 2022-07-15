import { AppShell, Container } from '@mantine/core';
import { ReactNode } from 'react';
import {
  copyright,
  shortAppDescription,
} from '../../common/appMeta';
import {
  storefrontFooterLinks,
  storefrontHeaderLinks,
} from '../../common/links';
import { MantineLogo } from '../../components/MantineLogo/MantineLogo';
import {
  StorefrontFooter
} from '../../components/StorefrontFooter/StorefrontFooter';
import {
  StorefrontHeader
} from '../../components/StorefrontHeader/StorefrontHeader';

export interface StorefrontLayoutProps {
  children: ReactNode;
}

export function StorefrontLayout({
  children,
}: StorefrontLayoutProps) {
  return (
    <AppShell
      padding="md"
      header={
        <StorefrontHeader
          links={storefrontHeaderLinks}
          logo={<MantineLogo />}
        />
      }
      footer={
        <StorefrontFooter
          links={storefrontFooterLinks}
          logo={<MantineLogo />}
          description={shortAppDescription}
          copyright={copyright}
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
      <Container size="xl">
        {children}
      </Container>
    </AppShell>
  );
}
