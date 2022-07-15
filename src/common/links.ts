export type NestedLinkList = {
  link: string;
  label: string;
  links?: { link: string; label: string }[];
}[];

export type LinkList = {
  link: string;
  label: string;
}[];

export const storefrontHeaderLinks: NestedLinkList = [
  {
    link: '/',
    label: 'Home',
  },
  {
    link: '/about',
    label: 'About',
  },
  {
    link: '/contact',
    label: 'Contact',
  },
];

export const appHeaderLinks: LinkList = [
  {
    link: '/app/dashboard',
    label: 'Dashboard',
  },
  {
    link: '/app/projects',
    label: 'Projects',
  },
  {
    link: '/app/documentation',
    label: 'Documentation',
  },
];

export const storefrontFooterLinks: NestedLinkList = [
  {
    link: '/',
    label: 'Home',
  },
  {
    link: '/about',
    label: 'About',
  },
  {
    link: '/contact',
    label: 'Contact',
  },
];
