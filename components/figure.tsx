'use client';

import { ReactNode, useState } from 'react';
import Image, { ImageProps } from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { ChevronDown, ExternalLink, Figma, GitHub } from 'react-feather';

import { AccordionContent, AccordionItem, AccordionTrigger } from '&/components/ui/accordion';
import { Badge } from '&/components/ui/badge';
import { cardVariants, cn } from '&/lib/utils';
import PrizeRibbon from '&/public/prize-ribbon.png';

interface FigureProps extends Pick<ImageProps, 'src' | 'alt'> {
  title: string;
  description: string;
  technologies: string[];
  dates: string;
  type: 'personal' | 'work';
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
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <motion.div
      className="border-b border-b-gray-200 py-8 last:border-b-0"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}>
      <motion.div variants={cardVariants}>
        <AccordionItem value={title}>
          <AccordionTrigger
            className="flex flex-col gap-x-16 lg:flex-row lg:items-center lg:justify-between"
            onClick={() => setIsExpanded(!isExpanded)}>
            <div className="mb-8 max-w-xl lg:mb-0">
              <h2 className="mb-3 text-2xl font-semibold">
                {title}{' '}
                <ChevronDown
                  className={cn(
                    'ease-[cubic-bezier(0.87,_0,_0.13,_1)] inline-block transition-transform duration-300',
                    isExpanded && 'rotate-180',
                  )}
                  size={21}
                  aria-hidden
                />
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
                    <GitHub color="#70777f" size={21} aria-label={`Go to ${title}'s Github repository`} />
                  </Link>
                )}

                {figmaLink && (
                  <Link href={figmaLink} target="_blank">
                    <Figma color="#70777f" size={21} aria-label={`Go to ${title}'s Figma design`} />
                  </Link>
                )}

                {externalLink && (
                  <Link href={externalLink} target="_blank">
                    <ExternalLink color="#70777f" size={21} aria-label={`Go to ${title}'s URL`} />
                  </Link>
                )}
              </div>
            </div>

            <div className="relative">
              <Image
                className="h-64 w-96 rounded-2xl border border-gray-200 object-cover object-right-top"
                src={src}
                placeholder="blur"
                quality={100}
                alt={alt}
              />

              {title === 'Venuelytics' && (
                <Image className="absolute -top-6 -left-10 w-24 h-24" src={PrizeRibbon} alt={alt} />
              )}
            </div>
          </AccordionTrigger>

          <AccordionContent className="mt-16">{extraContent}</AccordionContent>
        </AccordionItem>
      </motion.div>
    </motion.div>
  );
}
