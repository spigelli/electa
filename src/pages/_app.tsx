import { withTRPC } from '@trpc/next';
import { GetServerSidePropsContext, NextPage } from 'next';
import { Session } from 'next-auth';
import {
  getSession,
  SessionProvider,
} from 'next-auth/react';
import { ReactElement, ReactNode, useState } from 'react';
import { AppProps } from 'next/app';
import { getCookie, setCookies } from 'cookies-next';
import Head from 'next/head';
import {
  MantineProvider,
  ColorScheme,
  ColorSchemeProvider,
  Global,
} from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import type { AppRouter } from '../server/routers/_app';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithExtras = AppProps & {
  // Color scheme for mantine
  colorScheme: ColorScheme;
  // Session for next-auth
  session: Session | null;
  // Component for per-page nextjs layouts
  Component: NextPageWithLayout;
};

function App({
  Component,
  pageProps,
  session,
  colorScheme: pageColorScheme,
}: AppPropsWithExtras) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    pageColorScheme
  );

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme =
      value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookies('mantine-color-scheme', nextColorScheme, {
      maxAge: 60 * 60 * 24 * 30,
    });
  };

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <>
      <Head>
        <title>Mantine next example</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="shortcut icon" href="/Users/isaacspiegel/Documents/Repositories/mantine-nextauth-trpc-template/public/favicon.svg" />
      </Head>

      <Global
        styles={(theme) => ({
          '*, *::before, *::after': {
            boxSizing: 'border-box',
          },

          body: {
            ...theme.fn.fontStyles(),
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
            color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
            lineHeight: theme.lineHeight,
            height: '100vh',
          },
          '#__next': {
            height: '100vh',
          }
        })}
      />
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{ colorScheme }}
          withGlobalStyles
          withNormalizeCSS
        >
          <NotificationsProvider>
            <SessionProvider session={session} refetchInterval={5 * 60}>
              {getLayout(<Component {...pageProps} />)}
            </SessionProvider>
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

App.getInitialProps = async ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
  session: await getSession({ ctx }) || null,
});

export default withTRPC<AppRouter>({
  config({ ctx }) {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const url = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/api/trpc`
      : 'http://localhost:3000/api/trpc';

    return {
      url,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: true,
})(App);
