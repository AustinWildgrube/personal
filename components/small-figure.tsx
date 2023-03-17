'use client';

import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { Link as FeatherLink } from 'react-feather';

import { cardVariants } from '&/lib/utils';

interface SmallFigureProps {
  title: string;
  description: string;
  link: string;
  src: string;
  alt: string;
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
            alt={alt}
            height={250}
            width={500}
          />

          <h3 className="mr-2 flex items-center justify-center gap-2 text-xl font-semibold">
            {title} <FeatherLink size={18} />
          </h3>

          <p className="px-6">{description}</p>
        </motion.div>
      </motion.div>
    </Link>
  );
}
