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
  const baseClass =
    'group inline-flex min-h-12 items-center justify-center gap-2 rounded-[10px] border px-4 py-3 text-[0.72rem] font-black uppercase tracking-[0.14em] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#11212D]'
  const variantClass =
    variant === 'primary'
      ? 'border-[#06141B] bg-[#06141B] text-white shadow-[0_12px_26px_rgba(6,20,27,0.16)] hover:bg-[#11212D]'
      : 'border-[#9FAAAF] bg-white/60 text-[#06141B] hover:border-[#06141B] hover:bg-white'

  return (
    <motion.a
      href={href}
      className={`${baseClass} ${variantClass}`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.985 }}
    >
      <span>{children}</span>
      <span className="transition-transform duration-200 group-hover:translate-x-0.5">
        {icon}
      </span>
    </motion.a>
  )
}
