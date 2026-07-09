import { useState } from 'react'
import { ArrowUpRight, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import CTAButton from './CTAButton'

const profileImage = '/assets/ilyas-camera.png'

export default function ProfileHeader() {
  const [imageLoaded, setImageLoaded] = useState(true)

  return (
    <section aria-labelledby="profile-title" className="space-y-5">
      <motion.div
        className="overflow-hidden rounded-[10px] border border-[#D5DEE3] bg-[#E8EEF1]"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
      >
        {imageLoaded ? (
          <img
            src={profileImage}
            alt="Ilyas Mohaimel holding a camera"
            className="aspect-[1.75/1] w-full object-cover object-[50%_27%]"
            onError={() => setImageLoaded(false)}
          />
        ) : (
          <div className="grid aspect-[1.75/1] place-items-center bg-[#E8EEF1] font-display text-7xl uppercase leading-none text-[#11212D]">
            IM
          </div>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.44, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="mb-1.5 text-[0.72rem] font-black uppercase tracking-[0.24em] text-[#253745]">
          OFFICIAL LINKS
        </p>
        <h1
          id="profile-title"
          className="font-display text-[clamp(4.25rem,16vw,6rem)] font-black uppercase leading-[0.82] tracking-normal text-[#06141B]"
        >
          ILYAS
          <br />
          MOHAIMEL
        </h1>
        <p className="mt-1.5 text-[0.92rem] font-extrabold tracking-[0.02em] text-[#4A5C6A]">
          @mhiml._
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-3 min-[390px]:grid-cols-2"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.42, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
      >
        <CTAButton
          href="https://ilyasmohaimel.github.io/"
          icon={<ArrowUpRight aria-hidden="true" className="size-4 stroke-[2.5]" />}
        >
          VISIT PORTFOLIO
        </CTAButton>
        <CTAButton
          href="mailto:ilyasmohaimel@gmail.com"
          icon={<Mail aria-hidden="true" className="size-4 stroke-[2.5]" />}
          variant="secondary"
        >
          EMAIL ME
        </CTAButton>
      </motion.div>
    </section>
  )
}
