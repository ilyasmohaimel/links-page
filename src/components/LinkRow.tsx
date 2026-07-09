import { motion } from "framer-motion";
import React from "react";
type LinkRowProps = {
  title: string;
  description: string;
  url: string;
  icon: string;
};

export const LinkRow: React.FC<LinkRowProps> = ({
  title,
  description,
  url,
  icon,
}) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.01, backgroundColor: "#F9FAFB" }}
      whileTap={{ scale: 0.99 }}
      className="flex items-center justify-between w-full p-4 bg-white border border-[#D5DEE3] rounded-lg transition-all"
    >
      <div className="flex items-center gap-4">
        <div className="text-[#253745] text-xl">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-[#06141B]">{title}</h3>
          <p className="text-sm text-[#4A5C6A]">{description}</p>
        </div>
      </div>
      <motion.div whileHover={{ x: 4 }}>
        <span className="text-[#4A5C6A]">→</span>
      </motion.div>
    </motion.a>
  );
};