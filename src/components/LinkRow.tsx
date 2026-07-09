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
    const sizeClass = icon === 'github' ? 'link-row__mark--github' : 'link-row__mark'

    return <span className={`link-row__markBase ${sizeClass}`}>{mark}</span>
  }

  const Icon = iconMap[icon] ?? Mail

  return <Icon aria-hidden="true" className="link-row__iconGlyph" />
}

export default function LinkRow({ title, description, url, icon }: LinkRowProps) {
  return (
    <motion.a
      href={url}
      target={url.startsWith('http') ? '_blank' : undefined}
      rel={url.startsWith('http') ? 'noreferrer' : undefined}
      aria-label={`${title}: ${description}`}
      className="link-row"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.99 }}
    >
      <span className="link-row__icon">
        <LinkIconMark icon={icon} />
      </span>
      <span className="link-row__copy">
        <span className="link-row__title">{title}</span>
        <span className="link-row__desc">{description}</span>
      </span>
      <ArrowRight aria-hidden="true" className="link-row__arrow" />
    </motion.a>
  )
}
