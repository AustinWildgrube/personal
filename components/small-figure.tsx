'use client';

import Image, { ImageProps } from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { GitHub } from 'react-feather';

import { cardVariants } from '&/lib/utils';

interface SmallFigureProps extends Pick<ImageProps, 'src' | 'alt'> {
  title: string;
  description: string;
  link: string;
}

export function SmallFigure({ title, description, link, src, alt }: SmallFigureProps): JSX.Element {
  return (
    <Link className="mb-4 flex flex-col items-center justify-center text-center" href={link} target="_blank">
      <motion.div
        className="border-b border-b-gray-200 py-4 last:border-b-0 lg:py-8"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}>
        <motion.div className="w-full rounded" variants={cardVariants}>
          <Image
            className="mb-4 h-64 rounded-2xl border border-gray-200 object-cover"
            src={src}
            placeholder="blur"
            quality={100}
            alt={alt}
          />

          <h3 className="mr-2 flex items-center justify-center gap-2 text-xl font-semibold">
            {title} <GitHub size={18} aria-label={`Go to ${title}'s Github repository`} />
          </h3>

          <p className="px-6">{description}</p>
        </motion.div>
      </motion.div>
    </Link>
  );
}
