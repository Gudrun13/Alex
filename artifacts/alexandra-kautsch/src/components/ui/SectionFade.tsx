import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionFadeProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export function SectionFade({ children, className, id, delay = 0 }: SectionFadeProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.section>
  );
}
