import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    height: 62,
  },
  inner: {
    height: 62,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  profile: {
    flexGrow: 1,
    height: 62,
    display: 'flex',
    justifyContent: 'flex-end',
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
    fontSize: theme.fontSizes.md,
    fontWeight: 700,

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
