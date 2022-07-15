import {
  ComponentPropsWithoutRef,
  forwardRef,
  ReactNode,
} from 'react';
import {
  ChevronDown,
} from 'tabler-icons-react';
import { Group, Avatar, Text, Menu, UnstyledButton } from '@mantine/core';

interface UserButtonProps extends ComponentPropsWithoutRef<'button'> {
  image: string;
  name: string;
  email: string;
  icon?: ReactNode;
}

export const UserButton = forwardRef<HTMLButtonElement, UserButtonProps>(
  ({ image, name, email, icon, ...others }: UserButtonProps, ref) => (
    <UnstyledButton
      ref={ref}
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: '5px',
        paddingLeft: '9px',
        borderRadius: theme.radius.md,
        color: theme.colorScheme === 'dark'
          ? theme.colors.dark[0]
          : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark'
            ? theme.colors.dark[8]
            : theme.colors.gray[0],
        },
      })}
      {...others}
    >
      <Group>
        <Avatar size="sm" src={image} radius="xl" />

        <div style={{ flex: 1 }}>
          <Text size="sm" weight={500}>
            {name}
          </Text>

          <Text color="dimmed" size="xs">
            {email}
          </Text>
        </div>

        {icon || <ChevronDown size={16} />}
      </Group>
    </UnstyledButton>
  )
);
