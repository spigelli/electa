import { Center, Container } from '@mantine/core';
import { BuiltInProviderType } from 'next-auth/providers';
import {
  ClientSafeProvider, getProviders, LiteralUnion, signIn,
} from 'next-auth/react';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
// @ts-ignore
import {
  AuthChecker
} from '../../components/AuthChecker/AuthChecker';
import {
  AuthenticationForm
} from '../../components/AuthenticationForm/AuthenticationForm';

export interface SignInProps {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null;
}

export default function SignIn({
  providers
}: SignInProps) {
  const {query: { callbackUrl }} = useRouter();

  const commonSignInOptions = useMemo(() => ({
    callbackUrl,
  } as { callbackUrl: string }), [callbackUrl]);

  const authFormProviderConfig = useMemo(() => ({
    google: () => signIn("google"),
    github: () => console.log('Not implemented'),
  }), [providers, commonSignInOptions]);

  return (
    /* @ts-ignore */
    <Container
      size="sm"
      style={{ height: '100vh' }}
    >
      <Center style={{ height: '100vh' }}>
        <AuthenticationForm
          name="Mantine Next Auth Template"
          onSubmit={(data) => {
            console.log(data);
          }}
          providerSignInCallbacks={authFormProviderConfig}
        />
      </Center>
    </Container>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
