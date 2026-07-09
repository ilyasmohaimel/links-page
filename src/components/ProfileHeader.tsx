import { useState } from 'react'
import { ArrowUpRight, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import CTAButton from './CTAButton'

const profileImage = '/assets/ilyas-camera.png'

export default function ProfileHeader() {
  const [imageLoaded, setImageLoaded] = useState(true)

  return (
    <section aria-labelledby="profile-title" className="profile">
      <motion.div
        className="profile__media"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
      >
        {imageLoaded ? (
          <img
            src={profileImage}
            alt="Ilyas Mohaimel holding a camera"
            className="profile__image"
            onError={() => setImageLoaded(false)}
          />
        ) : (
          <div className="profile__fallback">IM</div>
        )}
      </motion.div>

      <motion.div
        className="profile__copy"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.44, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="profile__kicker">OFFICIAL LINKS</p>
        <h1 id="profile-title" className="profile__name">
          ILYAS
          <br />
          MOHAIMEL
        </h1>
        <p className="profile__handle">@mhiml._</p>
      </motion.div>

      <motion.div
        className="profile__actions"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.42, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
      >
        <CTAButton
          href="https://ilyasmohaimel.github.io/"
          icon={<ArrowUpRight aria-hidden="true" className="cta__icon" />}
        >
          VISIT PORTFOLIO
        </CTAButton>
        <CTAButton
          href="mailto:ilyasmohaimel@gmail.com"
          icon={<Mail aria-hidden="true" className="cta__icon" />}
          variant="secondary"
        >
          EMAIL ME
        </CTAButton>
      </motion.div>
    </section>
  )
}
