// ────────────────────────────────────────────────────────────────────────────
//  Site configuration — edit these values to make the template your own.
//  Almost everything visitor-facing (titles, the brand, SEO, JSON-LD, llms.txt)
//  is derived from this file, so start here.
// ────────────────────────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
}

export const site = {
  name: 'Your Name',
  // Optional second-script name (e.g. a Chinese 中文名) shown under the brand and
  // in a couple of prose pages. Leave it '' to hide it everywhere. See the README
  // for how to self-host a font subset so it renders identically on every device.
  nameZh: '',
  title: 'Your Name',
  description:
    'Max MSP devices — exploring custom audio and generative tools, from concept to demo.',
};

// Left-hand navigation. Each device is a separate link.
export const nav: NavItem[] = [
  { label: 'Device 1', href: '/devices/device_1' },
  { label: 'Device 2', href: '/devices/device_2' },
  { label: 'Device 3', href: '/devices/device_3' },
  { label: 'Device 4', href: '/devices/device_4' },
  { label: 'Device 5', href: '/devices/device_5' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'License', href: '/license' },
];

// Social / external links shown in the sidebar and on the contact page. Replace
// the placeholders with your own. If you drop or add one, also update the
// matching <Icon> in Sidebar.astro and the list in Contact.astro.
export const social = {
  instagram: 'https://www.instagram.com/yourusername',
  linkedin: 'https://www.linkedin.com/in/yourusername',
  github: 'https://github.com/yourusername',
};
