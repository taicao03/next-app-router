'use client';

import Link from 'next/link';
import React, { useState } from 'react';
// import { motion } from 'framer-motion';
import OffCanvas from './mobile';
import { usePathname } from 'next/navigation';
const logo = {
  logo: <img src="/images/svg/logo.svg" alt="" />,
  logoWhite: <img src="/images/svg/logo-white.svg" alt="" />,
};

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'For Creators', href: '/creators' },
  { name: 'For Brands', href: '/brands' },
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
          className={`flex md-flex lg:block items-center lg:justify-normal justify-between md:p-7 p-3.5 lg:px-8 `}
          aria-label="Global"
        >
          <div className="flex lg:flex-1 lg:hidden items-center">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              {type === false ? logo?.logoWhite : logo?.logo}
            </Link>
          </div>

          <div className="flex lg:hidden justify-center items-center">
            <button className="text-black" onClick={handleOpenOffCanvas}>
              <img src="/images/svg/icon/drop-down.svg" alt="" />
            </button>
          </div>
          <div className="md:mx-[112px] hidden md:block">
            <div className="flex">
              <div className="w-3/12">
                {type === false ? logo?.logoWhite : logo?.logo}
              </div>
              <div className="w-9/12">
                <div className="hidden lg:flex lg:gap-x-12 items-center">
                  {navigation.map((item, index) => (
                    <Link
                      key={index}
                      className={`text-nav ${
                        item?.href === path
                          ? 'text-primary'
                          : type === false
                          ? 'text-white'
                          : 'text-black'
                      }
                `}
                      href={item.href}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <OffCanvas isOpen={isOffCanvasOpen} onClose={handleCloseOffCanvas}>
        {navigation.map((item, index) => (
          <div key={index}>
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
