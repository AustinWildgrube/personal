'use client';

import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { ChevronDown, ExternalLink, Figma, GitHub } from 'react-feather';

import { AccordionContent, AccordionItem, AccordionTrigger } from '&/components/ui/accordion';
import { Badge } from '&/components/ui/badge';
import { cardVariants } from '&/lib/utils';

interface FigureProps {
  title: string;
  description: string;
  technologies: string[];
  dates: string;
  type: 'personal' | 'work';
  src: string;
  alt: string;
  extraContent: ReactNode;
  figmaLink?: string;
  githubLink?: string;
  externalLink?: string;
}

export function Figure({
  title,
  description,
  technologies,
  dates,
  type,
  src,
  alt,
  extraContent,
  figmaLink,
  githubLink,
  externalLink,
}: FigureProps): JSX.Element {
  return (
    <motion.div
      className="border-b border-b-gray-200 py-8 last:border-b-0"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}>
      <motion.div variants={cardVariants}>
        <AccordionItem value={title}>
          <AccordionTrigger className="flex flex-col gap-x-16 lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-8 max-w-xl lg:mb-0">
              <h2 className="mb-3 text-2xl font-semibold">
                {title} <ChevronDown className="inline-block" size={21} />
              </h2>

              <p className="mb-6">{description}</p>

              <p className="mb-6 text-sm">
                <span className="font-semibold text-black">Technologies:</span>{' '}
                {technologies.map((tech: string, i: number) => `${tech}${i < technologies.length - 1 ? ', ' : ''}`)}
              </p>

              <span className="mb-6 block text-xs">
                <Badge color={type === 'work' ? 'blue' : 'green'} title={type} /> {dates}
              </span>

              <div className="flex space-x-2">
                {githubLink && (
                  <Link href={githubLink} target="_blank">
                    <GitHub color="#70777f" size={21} />
                  </Link>
                )}

                {figmaLink && (
                  <Link href={figmaLink} target="_blank">
                    <Figma color="#70777f" size={21} />
                  </Link>
                )}

                {externalLink && (
                  <Link href={externalLink} target="_blank">
                    <ExternalLink color="#70777f" size={21} />
                  </Link>
                )}
              </div>
            </div>

            <div className="relative">
              <Image
                className="h-64 rounded-2xl border border-gray-200 object-cover object-right-top"
                src={src}
                height={242}
                width={368}
                alt={alt}
              />

              {title === 'Venuelytics' && (
                <Image
                  className="absolute -top-6 -left-10"
                  src="/prize-ribbon.png"
                  height={100}
                  width={100}
                  alt={alt}
                />
              )}
            </div>
          </AccordionTrigger>

          <AccordionContent className="mt-16">{extraContent}</AccordionContent>
        </AccordionItem>
      </motion.div>
    </motion.div>
  );
}