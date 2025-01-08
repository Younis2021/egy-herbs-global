'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface LogoProps {
  isScrolled: boolean;
}

export function Logo({ isScrolled }: LogoProps) {
  return (
    <Link href="/">
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={
            isScrolled
              ? 'https://egyherbsglobal-770136110.imgix.net/global/1.png'
              : 'https://egyherbsglobal-770136110.imgix.net/global/2.png'
          }
          alt="Egy Herbs Global"
          width={210}
          height={210}
          className="transition-opacity duration-300"
          priority
        />
      </motion.div>
    </Link>
  );
}
