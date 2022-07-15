import { AuthenticationForm } from './AuthenticationForm';

export default {
  title: 'Authentication Form',
}

export const Usage = () => (
  <AuthenticationForm
    name="Storybook Story"
    providerSignInCallbacks={{
      google: () => console.log('google sign in'),
      github: () => console.log('github sign in'),
    }}
  />
);
