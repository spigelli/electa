import {
  Burger,
  Anchor,
  Container,
  Divider,
  Group,
  Header,
  Menu,
  Text,
} from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import {
  signOut,
  useSession,
} from 'next-auth/react';
import Link from 'next/link';
import { ReactNode } from 'react';
import {
  Logout, Settings,
} from 'tabler-icons-react';
import {
  LinkList,
} from '../../common/links';
import { UserButton } from '../UserButton/UserButton';
import { useStyles } from './AppHeader.styles';

export interface AppHeaderProps {
  links: LinkList;
  profileLinks: LinkList;
  logo: ReactNode;
}

export default function AppHeader({
  links,
  logo,
  profileLinks,
}: AppHeaderProps) {
  const { classes } = useStyles();
  const [opened, toggleOpened] = useBooleanToggle(false);

  const items = links.map((link) => {
    return (
      <Link
        href={link.link}
        key={link.label}
        passHref
      >
        <a
          key={link.label}
          className={classes.link}
        >
          {link.label}
        </a>
      </Link>
    );
  });

  const {data: session} = useSession();
  console.log('session', session);

  return (
    <Header
      height={62}
    >
      <Container
        fluid
        px={120}
        className={classes.container}
      >
        <div className={classes.inner}>
          {logo}
          <Group
            ml={60}
            spacing={5}
            className={classes.links}
          >
            {items}
          </Group>
          <Burger
            opened={opened}
            onClick={() => toggleOpened()}
            className={classes.burger}
            size="sm"
          />
        </div>
        <div className={classes.profile}>
          <Menu
            control={
              <UserButton
                image={session?.user?.image || ''}
                name={session?.user?.name || ''}
                email={session?.user?.email || 'No email'}
              />
            }
            placement="end"
            transition="scale-y"
            styles={{
              body: {
                marginTop: '-4px',
              }
            }}
          >
            <Menu.Item
              icon={
                <Settings size={14} />
              }
            >
              Settings
            </Menu.Item>
            <Divider />
            <Menu.Item
              color="red"
              icon={
                <Logout size={14} />
              }
              onClick={() => signOut()}
            >
              Sign Out
            </Menu.Item>

          </Menu>
        </div>
      </Container>
    </Header>
  );
}
