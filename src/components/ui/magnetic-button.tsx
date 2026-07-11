"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  className?: string;
  magneticPower?: number; // Kept for prop compatibility, but unused
}

export function MagneticButton({
  children,
  className,
  magneticPower,
  ...props
}: MagneticButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative flex items-center justify-center px-6 py-3 font-medium tracking-wide transition-colors duration-300 rounded-md outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
