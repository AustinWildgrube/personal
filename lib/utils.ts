import { ClassValue, clsx } from 'clsx';
import { Variants } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

export const cardVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 50,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
