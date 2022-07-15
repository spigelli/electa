import { Text, Container, ActionIcon, Group } from '@mantine/core';
import { ReactNode } from 'react';
import { BrandTwitter, BrandYoutube, BrandInstagram } from 'tabler-icons-react';
import { NestedLinkList } from '../../common/links';
import { useStyles } from './StorefrontFooter.styles';


interface FooterLinksProps {
  links: NestedLinkList;
  logo: ReactNode;
  description: string;
  copyright: string;
}

export function StorefrontFooter({
  links,
  logo,
  description,
  copyright,
}: FooterLinksProps) {
  const { classes } = useStyles();
  const groups = links.map((group) => {
    const links = group.links?.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div
        className={classes.wrapper}
        key={group.link}
      >
        <Text className={classes.title}>
          {group.label}
        </Text>
        {links}
      </div>
    );
  });
  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          {logo}
          <Text
            size="xs"
            color="dimmed"
            className={classes.description}
          >
            {description}
          </Text>
        </div>
        <div className={classes.groups}>
          {groups}
        </div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text
          color="dimmed"
          size="sm"
        >
          {copyright}
        </Text>

        <Group
          spacing={0}
          className={classes.social}
          position="right"
          noWrap
        >
          <ActionIcon size="lg">
            <BrandTwitter size={18} />
          </ActionIcon>
          <ActionIcon size="lg">
            <BrandYoutube size={18} />
          </ActionIcon>
          <ActionIcon size="lg">
            <BrandInstagram size={18} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
