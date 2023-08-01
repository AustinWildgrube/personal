'use client';

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';

import { AnimatePresence, motion } from 'framer-motion';

export const Zoom = (props: ImageProps) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const zoomOut = (): void => {
    setIsZoomed(false);
  };

  window.document.addEventListener('scroll', zoomOut, { once: true });
  window.document.addEventListener(
    'keydown',
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        zoomOut();
      }
    },
    { once: true },
  );

  return (
    <div className="relative">
      <Image
        className="h-64 w-96 rounded-2xl border border-gray-200 object-cover"
        onClick={() => setIsZoomed(true)}
        src={props.src}
        placeholder={props.placeholder}
        quality={100}
        alt={props.alt}
      />

      <AnimatePresence>
        {isZoomed && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={() => setIsZoomed(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <motion.div
              className="relative mx-4 my-8 h-screen w-screen overflow-hidden rounded-lg shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}>
                <Image
                  className="absolute top-0 left-0 h-screen w-screen cursor-zoom-out rounded object-contain"
                  src={props.src}
                  placeholder={props.placeholder}
                  quality={100}
                  alt={props.alt}
                  fill
                />
              </motion.div>

              <motion.button
                className="absolute top-0 right-0 m-4 text-white hover:text-slate-300 focus:outline-none"
                onClick={() => setIsZoomed(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}>
                X
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
