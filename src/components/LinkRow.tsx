import {
  ArrowRight,
  Camera,
  Globe,
  LockKeyhole,
  Mail,
  MessageCircle,
  type LucideIcon,
} from 'lucide-react'
import { motion } from 'framer-motion'
import type { LinkIcon } from '../data/links'

type LinkRowProps = {
  title: string
  description: string
  url: string
  icon: LinkIcon
}

const iconMap: Partial<Record<LinkIcon, LucideIcon>> = {
  mail: Mail,
  lock: LockKeyhole,
  instagram: Camera,
  discord: MessageCircle,
  globe: Globe,
}

function LinkIconMark({ icon }: { icon: LinkIcon }) {
  if (icon === 'x' || icon === 'google' || icon === 'github') {
    const mark = icon === 'google' ? 'G' : icon === 'github' ? 'GH' : 'X'
    const sizeClass = icon === 'github' ? 'text-[1.25rem]' : 'text-[1.55rem]'

    return (
      <span
        className={`grid size-6 place-items-center font-sans ${sizeClass} font-medium leading-none text-[#06141B]`}
      >
        {mark}
      </span>
    )
  }

  const Icon = iconMap[icon] ?? Mail

  return <Icon aria-hidden="true" className="size-6 stroke-[2.2]" />
}

export default function LinkRow({ title, description, url, icon }: LinkRowProps) {
  return (
    <motion.a
      href={url}
      target={url.startsWith('http') ? '_blank' : undefined}
      rel={url.startsWith('http') ? 'noreferrer' : undefined}
      aria-label={`${title}: ${description}`}
      className="group grid min-h-[58px] grid-cols-[34px_1fr_24px] items-center gap-3 rounded-[11px] border border-[#CCD0CF] bg-white/54 px-4 py-2.5 text-[#06141B] shadow-[0_10px_24px_rgba(17,33,45,0.045)] transition-colors duration-200 hover:border-[#8D9AA3] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#11212D]"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.99 }}
    >
      <span className="flex items-center justify-center text-[#06141B]">
        <LinkIconMark icon={icon} />
      </span>
      <span className="min-w-0">
        <span className="block text-[0.82rem] font-black uppercase leading-tight tracking-[0.17em] text-[#11212D]">
          {title}
        </span>
        <span className="block truncate text-[0.78rem] font-semibold leading-tight text-[#4A5C6A]">
          {description}
        </span>
      </span>
      <ArrowRight
        aria-hidden="true"
        className="size-5 justify-self-end stroke-[2.1] transition-transform duration-200 group-hover:translate-x-1"
      />
    </motion.a>
  )
}
