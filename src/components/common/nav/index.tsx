'use client';

import Link from 'next/link';
import React, { useState } from 'react';
// import { motion } from 'framer-motion';
import OffCanvas from './mobile';
import { usePathname } from 'next/navigation';
const logo = {
  logo: <img src="/images/svg/logo.svg" alt="" />,
};

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'For Creators', href: '/creators' },
  { name: 'For Brands', href: '/brands' },
  { logo: true, href: '/' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Library', href: '/library' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Navbar({ type }) {
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
  const path = usePathname();

  const handleOpenOffCanvas = () => {
    setIsOffCanvasOpen(true);
  };

  const handleCloseOffCanvas = () => {
    setIsOffCanvasOpen(false);
  };

  return (
    <>
      <div className="relative z-30">
        <nav
          className={`flex md-flex lg:block items-center lg:justify-normal justify-between md:p-7 p-3.5 lg:px-8 ${
            type === true ? 'text-black' : 'text-white'
          }`}
          aria-label="Global"
        >
          <div className="flex lg:flex-1 lg:hidden">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              {logo?.logo}
            </Link>
          </div>
          <div className="flex lg:hidden justify-center">
            <button className="text-black" onClick={handleOpenOffCanvas}>
              Open Off-Canvas
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-12 justify-center items-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                className={`text-nav text-black ${
                  item?.href === path ? 'text-red-500' : ''
                }`}
                href={item.href}
                passHref
              >
                {item.name || logo?.logo}
              </Link>
            ))}
          </div>
        </nav>
      </div>
      <OffCanvas isOpen={isOffCanvasOpen} onClose={handleCloseOffCanvas}>
        {navigation.map((item) => (
          <div key={item.name}>
            <Link
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </Link>
          </div>
        ))}
      </OffCanvas>
    </>
  );
}
