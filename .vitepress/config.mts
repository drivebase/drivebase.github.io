import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Drivebase',
  description:
    'Next-generation cloud-agnostic file management application that empowers users to organize, upload, and access files across multiple cloud providers.',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    [
      'script',
      {
        src: 'https://analytics.monawwar.io/script.js',
        'data-website-id': '3def49a3-cbce-4f3b-acb4-bd46421e9a2b',
      },
    ],
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Providers', link: '/docs/providers' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/docs/introduction' },
          { text: 'How it works', link: '/docs/how-it-works' },
          {
            text: 'Quickstart',
            link: '/docs/quick-start',
          },
          {
            text: 'Providers',
            link: '/docs/providers',
          },
        ],
      },
      {
        text: 'Installation',
        items: [
          { text: 'Docker', link: '/docs/installation/docker' },
          { text: 'Manual', link: '/docs/installation/manual' },
        ],
      },
      {
        text: 'Providers',
        items: [
          { text: 'Google Drive', link: '/docs/providers/google-drive' },
          { text: 'Dropbox', link: '/docs/providers/dropbox' },
          { text: 'OneDrive', link: '/docs/providers/one-drive' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/drivebase/drivebase' },
    ],
  },
});
