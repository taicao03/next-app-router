'use client';
import * as React from 'react';
import { motion } from 'framer-motion';
// import PropTypes from 'prop-types';
import Link from 'next/link';

export default function Orther({ dataOther }) {
  const iconCenter = `/images/svg/icon/center-blog.svg`;
  console.log(dataOther);
  return (
    <>
      <div className="my-10 px-5 lg:px-80">
        <h1 className="text-black text-title_32_44_700">Orther News</h1>
        {Array.from({ length: 3 }, (_, index) => (
          <div
            className="grid grid-cols-3 gap-8 border-b border-border py-8"
            key={index}
          >
            <div className="col-span-3 md:col-span-1 image-container">
              <Link href="" className="cursor-pointer">
                <motion.img
                  src="/images/test.jpg"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
                  alt="Portfolio project"
                  whileHover={{ scale: 1.2 }}
                  className="h-[257px] md:h-[210px] rounded-lg w-full"
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                />
              </Link>
            </div>
            <div className="col-span-3 md:col-span-2">
              <Link href="" className="cursor-pointer">
                <h3 className="text-black md:text-title_20_32_700 mb-2 text-title_20_32_700 hover:underline hover:text-primary">
                  {`Why visual identity is crucial to a Creator's success`}
                </h3>
              </Link>
              <p className="flex mb-4 text-gray md:text-sm text-text_13_22_600 font-semibold uppercase">
                FOR CREATORS
                <img src={iconCenter} alt="" className="mx-5" />
                FEB 17, 2022
              </p>
              <p className="text-text_13_22_400 text-black">
                Learn how to overcome your biggest insecurities as a creativ e
                professional. Get advice for cultivating your creative
                confidence and take your career to new heights.
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
