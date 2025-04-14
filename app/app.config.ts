export default defineAppConfig({
  global: {
    meetingLink: 'https://us05web.zoom.us/j/9521537563?pwd=jO1vEAC39DQaXKwdpgjTbtsPDw6aeq.1',
    available: true,
  },
  profile: {
    name: 'Arajdian Altaf',
    job: 'Undergraduate Information Technology Student',
    email: 'arajdianaltaf123@gmail.com',
    phone: '+62XXXXXX',
    picture: 'https://media.licdn.com/dms/image/v2/D5603AQEIiVVddgqDaQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723001600963?e=1749686400&v=beta&t=BhEzL0KVG543aTSnmxU7FINbQrKGWL1-UAlUTvhmD2I',
  },
  socials: {
    github: 'https://github.com/DuckOfTheBooBoo',
    twitter: 'https://twitter.com/Ajinoomoto',
    linkedin: 'https://www.linkedin.com/in/arajdian-altaf/',
    instagram: 'https://www.instagram.com/arajdian.altaf/',
    spotify: 'https://www.spotify.com',
  },
  seo: {
    title: 'Arajdian Altaf\'s Portfolio',
    description: 'A website portfolio that showcase about me and my works',
    url: 'https://arajdian-altaf-portfolio.nuxt.space',
    lang: 'en',
  },
  ui: {
    colors: {
      primary: 'emerald',
      neutral: 'neutral',
    },
    notifications: {
      position: 'top-0 bottom-auto',
    },
    notification: {
      progress: {
        base: 'absolute bottom-0 end-0 start-0 h-0',
        background: 'bg-transparent dark:bg-transparent',
      },
    },
    button: {
      slots: {
        base: 'cursor-pointer',
      },
      defaultVariants: {
        color: 'neutral',
      },
    },
    input: {
      defaultVariants: {
        color: 'neutral',
      },
    },
    textarea: {
      defaultVariants: {
        color: 'neutral',
      },
    },
    icons: {
      loading: 'lucide:loader',
    },
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
})
