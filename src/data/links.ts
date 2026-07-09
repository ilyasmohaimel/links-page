export type LinkIcon =
  | 'mail'
  | 'lock'
  | 'instagram'
  | 'github'
  | 'google'
  | 'discord'
  | 'globe'
  | 'x'

export type LinkItem = {
  title: string
  description: string
  url: string
  icon: LinkIcon
}

export const links: LinkItem[] = [
  {
    title: 'EMAIL',
    description: 'ilyasmohaimel@gmail.com',
    url: 'mailto:ilyasmohaimel@gmail.com',
    icon: 'mail',
  },
  {
    title: 'TUTA MAIL',
    description: 'ilyasmohaimel@tutamail.com',
    url: 'mailto:ilyasmohaimel@tutamail.com',
    icon: 'lock',
  },
  {
    title: 'INSTAGRAM',
    description: '@mhiml._',
    url: 'https://www.instagram.com/mhiml._/',
    icon: 'instagram',
  },
  {
    title: 'GITHUB',
    description: 'github.com/ilyasmohaimel',
    url: 'https://github.com/ilyasmohaimel',
    icon: 'github',
  },
  {
    title: 'GOOGLE DEVELOPER',
    description: 'g.dev/ilyasmohaimel',
    url: 'https://g.dev/ilyasmohaimel',
    icon: 'google',
  },
  {
    title: 'DISCORD',
    description: 'discord.com/users/711891007796412416',
    url: 'https://discord.com/users/711891007796412416',
    icon: 'discord',
  },
  {
    title: 'WEBSITE',
    description: 'ilyasmohaimel.github.io',
    url: 'https://ilyasmohaimel.github.io/',
    icon: 'globe',
  },
  {
    title: 'X',
    description: '@LookFrost289116',
    url: 'https://x.com/LookFrost289116',
    icon: 'x',
  },
]
