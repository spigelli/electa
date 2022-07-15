import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { ReactNode } from 'react';
import {
  createStyles,
  Header,
  Menu,
  Group,
  Center,
  Burger,
  Container, Button,
} from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import { ChevronDown } from 'tabler-icons-react';
import { NestedLinkList } from '../../common/links';

const useStyles = createStyles((theme) => ({
  inner: {
    height: 56,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark'
      ? theme.colors.dark[0]
      : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark'
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));

interface PublicHeaderProps {
  links: NestedLinkList;
  logo: ReactNode;
}

export function StorefrontHeader({
  links,
  logo,
}: PublicHeaderProps) {
  const [opened, toggleOpened] = useBooleanToggle(false);
  const { classes } = useStyles();

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          delay={0}
          transitionDuration={0}
          placement="end"
          gutter={1}
          control={
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>
                  {link.label}
                </span>
                <ChevronDown size={12} />
              </Center>
            </a>
          }
        >
          {menuItems}
        </Menu>
      );
    }

    return (
      <Link
        href={link.link}
        key={link.label}
        passHref
      >
        <a
          key={link.label}
          href={link.link}
          className={classes.link}
        >
          {link.label}
        </a>
      </Link>
    );
  });

  const { status } = useSession()
  const isLoggedIn = status === 'authenticated';

  return (
    <Header
      height={56}
    >
      <Container>
        <div className={classes.inner}>
          {logo}
          <Group
            spacing={5}
            className={classes.links}
          >
            {items}
            {!isLoggedIn ? (
              <Button onClick={() => signIn()}>
                Sign In
              </Button>
            ) : (
              <Link
                href="/app/dashboard"
                passHref
              >
                <Button>
                  Go to App
                </Button>
              </Link>
            )}
          </Group>
          <Burger
            opened={opened}
            onClick={() => toggleOpened()}
            className={classes.burger}
            size="sm"
          />
        </div>
      </Container>
    </Header>
  );
}
