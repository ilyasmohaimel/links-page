import { motion, useReducedMotion, type Variants } from 'framer-motion'
import LinkRow from './components/LinkRow'
import ProfileHeader from './components/ProfileHeader'
import { links } from './data/links'

export default function App() {
  const prefersReducedMotion = useReducedMotion()
  const ease = [0.22, 1, 0.36, 1] as const
  const listVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.045,
        delayChildren: prefersReducedMotion ? 0 : 0.2,
      },
    },
  }
  const rowVariants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.36, ease },
    },
  }

  return (
    <main className="relative isolate flex min-h-svh items-center justify-center overflow-hidden px-3 py-4 text-[#06141B] sm:px-6 sm:py-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[#F4F7F8]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-80 [background-image:linear-gradient(to_right,rgba(17,33,45,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,33,45,0.055)_1px,transparent_1px)] [background-size:48px_48px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 left-1/2 -z-10 hidden -translate-x-1/2 select-none font-display text-[18rem] font-black uppercase leading-none tracking-normal text-[#06141B]/[0.035] md:block"
      >
        ILYAS
      </div>

      <motion.div
        className="w-full max-w-[430px] rounded-[32px] border border-[#D5DEE3] bg-[#F7FAFB]/86 p-5 shadow-[0_28px_70px_rgba(17,33,45,0.18),inset_0_0_0_1px_rgba(255,255,255,0.72)] backdrop-blur sm:rounded-[44px] sm:p-7"
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
      >
        <header className="mb-5 flex items-start justify-between border-b border-[#D5DEE3] pb-5">
          <p className="max-w-[13rem] text-[0.68rem] font-black uppercase leading-[1.38] tracking-[0.2em] text-[#253745]">
            DIGITAL CONTACT
            <br />
            CREATOR SYSTEMS
          </p>
          <div className="flex items-center gap-2" aria-label="Language">
            <span className="rounded-full bg-[#06141B] px-3 py-1.5 text-[0.65rem] font-black uppercase tracking-[0.12em] text-white">
              EN
            </span>
            <span className="rounded-full border border-[#D5DEE3] bg-white/70 px-3 py-1.5 text-[0.65rem] font-black uppercase tracking-[0.12em] text-[#4A5C6A]">
              FR
            </span>
          </div>
        </header>

        <ProfileHeader />

        <motion.nav
          aria-label="Official links"
          className="mt-5 space-y-2.5"
          variants={listVariants}
          initial="hidden"
          animate="visible"
        >
          {links.map((link) => (
            <motion.div key={link.title} variants={rowVariants}>
              <LinkRow {...link} />
            </motion.div>
          ))}
        </motion.nav>

        <footer className="mt-6 border-t border-[#D5DEE3] pt-5 text-center text-[0.72rem] font-semibold tracking-[0.26em] text-[#4A5C6A]">
          Ilyas Mohaimel · Official Links
        </footer>
      </motion.div>
    </main>
  )
}
