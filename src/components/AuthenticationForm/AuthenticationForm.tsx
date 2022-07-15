import React, { FormEvent } from 'react';
import { useForm, useToggle, upperFirst } from '@mantine/hooks';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor, Stack,
} from '@mantine/core';
import {
  GoogleButton,
  GithubButton,
} from '../SocialButtons/SocialButtons';

export interface AuthenticationFormProps extends PaperProps<'div'> {
  onSubmit?: (values: FormEvent<HTMLDivElement>) => void;
  name: string;
  includePassword?: boolean;
  includeEmail?: boolean;
  providerSignInCallbacks: {
    google: () => any;
    github: () => any;
  }
}

export interface AuthenticationFormValues {
  email?: string;
  password?: string;
  terms: boolean;
  firstName: string;
  lastName: string;
}

export function AuthenticationForm({
  onSubmit,
  name,
  includePassword,
  includeEmail,
  providerSignInCallbacks,
  ...pagerProps
}: AuthenticationFormProps) {
  const [type, toggle] = useToggle(
    'login',
    ['login', 'register'],
  );

  const form = useForm<AuthenticationFormValues>({
    initialValues: {
      ...(includeEmail && { email: '' }),
      firstName: '',
      lastName: '',
      ...(includePassword && { password: '' }),
      terms: true,
    },
    validationRules: {
      ...(includeEmail && {
        email: (val) => Boolean(val && /^\S+@\S+$/.test(val)),
      }),
      ...(includePassword && {
        password: (val) => Boolean(val && val.length >= 9),
      }),
    },
  });

  return (
    <Paper
      radius="md"
      p="xl"
      withBorder
      {...pagerProps}
    >
      <Text
        size="lg"
        weight={500}
      >
        Welcome to {name}, {type} with
      </Text>

      <Stack
        mb="md"
        mt="md"
      >
        <GoogleButton
          radius="xl"
          onClick={providerSignInCallbacks.google}
        >
          Google
        </GoogleButton>
        <GithubButton
          radius="xl"
          onClick={providerSignInCallbacks.github}
        >
          Google
        </GithubButton>
      </Stack>

      {includeEmail && (
        <Divider
          label="Or continue with email"
          labelPosition="center"
          my="lg"
        />
      )}

      <form onSubmit={form.onSubmit(() => {})}>
        <Group
          direction="column"
          grow
        >
          {type === 'register' && (
            <TextInput
              label="First Name"
              placeholder="Your first name"
              required
              value={form.values.firstName}
              onChange={(event) => form.setFieldValue(
                'firstName',
                event.currentTarget.value,
              )}
            />
          )}
          {type === 'register' && (
            <TextInput
              label="Last Name"
              placeholder="Your family name"
              required
              value={form.values.lastName}
              onChange={(event) => form.setFieldValue(
                'lastName',
                event.currentTarget.value,
              )}
            />
          )}

          {includeEmail && (
            <>
              <TextInput
                required
                label="Email"
                placeholder="example@email.com"
                value={form.values.email}
                onChange={(event) => form.setFieldValue(
                  'email',
                  event.currentTarget.value
                )}
                error={form.errors.email && 'Invalid email'}
              />

              {includePassword && (
                <PasswordInput
                  required
                  label="Password"
                  placeholder="Your password"
                  value={form.values.password}
                  onChange={(event) => form.setFieldValue(
                    'password',
                    event.currentTarget.value
                  )}
                  error={form.errors.password && (
                    'Password should include at least 9 characters'
                  )}
                />
              )}
            </>
          )}

          {type === 'register' && (
            <Checkbox
              label="I accept terms and conditions"
              checked={form.values.terms}
              onChange={(event) => form.setFieldValue(
                'terms',
                event.currentTarget.checked
              )}
            />
          )}
        </Group>

        <Group
          position="apart"
          mt="xl"
        >
          <Anchor
            component="button"
            type="button"
            color="gray"
            onClick={() => toggle()} size="xs"
          >
            {type === 'register' ? (
              'Already have an account? Login'
            ) : (
              "Don't have an account? Register"
            )}
          </Anchor>
          {includeEmail || !(type === 'login') && (
            <Button type="submit">
              {upperFirst(type)}
            </Button>
          )}
        </Group>
      </form>
    </Paper>
  );
}
