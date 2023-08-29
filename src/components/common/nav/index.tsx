'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import OffCanvas from './mobile';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Blogs', href: '/blogs' },
  { name: 'Pokemons', href: '/pokemons' },
];

export default function Navbar() {
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
      <div className="bg-white">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button className="text-black" onClick={handleOpenOffCanvas}>
              Open Off-Canvas
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                className="relative text-black"
                href={item.href}
                passHref
              >
                {item?.href === path && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 top-full block h-[1px] w-full bg-blue-200"
                  />
                )}
                {item.name}
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
