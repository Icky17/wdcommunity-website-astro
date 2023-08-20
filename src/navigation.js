import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '#',
    },
    {
      text: 'About',
      href: '/',
    },
    {
      text: 'Packages',
      href: getPermalink('/#packages'),
    },
    {
      text: 'Apps',
      href: getPermalink('/#apps'),
    },
    {
      text: 'Contribute',
      href: getPermalink('/#contribute'),
    },
  ],
  actions: [{ icon: 'tabler:brand-github', type: 'button', text: 'Source Code', href: 'https://github.com/Icky17/astro-wdcommunity-website' }],
};

export const footerData = {
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Mastodon', icon: 'tabler:brand-mastodon', href: 'https://mastodon.social/@icky17' },
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: 'https://twitter.com/icky17_jm' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/icky17' },
  ],
  footNote: ` 
    Maintained by <a href="https://github.com/orgs/WDCommunity/people">WDCommunity</a> with the help of <a href="https://github.com/WDCommunity/wdpksrc/graphs/contributors">contributors</a>.<br>
    Code licensed under <a href="https://github.com/WDCommunity">MIT</a>.<br><br>
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://jairomorales.is-a.dev"> Icky17</a> · All rights reserved.
  `,
};
