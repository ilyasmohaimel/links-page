import { motion } from "framer-motion";
import React from "react";
import { CTAButton } from "./CTAButton";

type ProfileHeaderProps = {
  profileImage?: string;
};

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profileImage }) => {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative">
        {profileImage ? (
          <motion.img
            src={profileImage}
            alt="Ilyas Mohaimel holding a camera"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-24 h-24 object-cover rounded-lg border border-border-color"
          />
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-24 h-24 bg-[#E8EEF1] border border-border-color rounded-lg flex items-center justify-center"
          >
            <span className="text-2xl font-bold text-text-muted">IM</span>
          </motion.div>
        )}
      </div>

      <div className="text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xs text-text-secondary tracking-widest uppercase"
        >
          Official Links
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-5xl font-black text-text-primary tracking-tighter mt-2 condensed-font"
        >
          <div>ILYAS</div>
          <div>MOHAIMEL</div>
        </motion.h1>
         <motion.p
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.4, duration: 0.5 }}
           className="text-text-secondary mt-2"
         >
           @mhiml._
         </motion.p>
       </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex flex-col sm:flex-row gap-3 w-full max-w-xs mx-auto"
      >
        <CTAButton onClick={() => window.open("https://ilyasmohaimel.github.io/", "_blank")}>
          VISIT PORTFOLIO
        </CTAButton>
        <CTAButton 
          variant="outlined"
          onClick={() => window.open("mailto:ilyasmohaimel@gmail.com", "_blank")}
        >
          EMAIL ME
        </CTAButton>
      </motion.div>
    </div>
  );
};