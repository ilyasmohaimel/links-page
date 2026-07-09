import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

type CTAButtonProps = {
  href: string
  children: ReactNode
  icon: ReactNode
  variant?: 'primary' | 'secondary'
}

export default function CTAButton({
  href,
  children,
  icon,
  variant = 'primary',
}: CTAButtonProps) {
  return (
    <motion.a
      href={href}
      className={`cta cta--${variant}`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.985 }}
    >
      <span className="cta__label">{children}</span>
      <span className="cta__iconWrap">{icon}</span>
    </motion.a>
  )
}
