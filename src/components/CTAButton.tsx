import { motion } from "framer-motion";
import React from "react";

type CTAButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "filled" | "outlined";
  className?: string;
};

export const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  onClick,
  variant = "filled",
  className = "",
}) => {
  const baseClasses = "px-6 py-3 rounded-full font-semibold text-sm tracking-wider transition-all";
  const variantClasses = {
    filled: "bg-cta-primary text-white hover:bg-[#253745]",
    outlined: "border border-border-color text-text-primary hover:bg-[#E8EEF1]",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      <div className="flex items-center gap-2 justify-center">
        {children}
        {variant === "outlined" && <span>✉️</span>}
      </div>
    </motion.button>
  );
};