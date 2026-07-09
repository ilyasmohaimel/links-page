import { motion, useReducedMotion, type Variants } from 'framer-motion'
import LinkRow from './components/LinkRow'
import ProfileHeader from './components/ProfileHeader'
import { links } from './data/links'
import { appStyles } from './styles'

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
    <>
      <style>{appStyles}</style>
      <main className="page">
        <div aria-hidden="true" className="page__background" />
        <div aria-hidden="true" className="page__grid" />
        <div aria-hidden="true" className="page__watermark">
          ILYAS
        </div>

        <motion.div
          className="shell"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.52, ease }}
        >
          <header className="shell__header">
            <p className="shell__eyebrow">
              DIGITAL CONTACT
              <br />
              CREATOR SYSTEMS
            </p>
            <div className="shell__language" aria-label="Language">
              <span className="shell__pill shell__pill--active">EN</span>
              <span className="shell__pill">FR</span>
            </div>
          </header>

          <ProfileHeader />

          <motion.nav
            aria-label="Official links"
            className="link-list"
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

          <footer className="shell__footer">Ilyas Mohaimel · Official Links</footer>
        </motion.div>
      </main>
    </>
  )
}
