'use client';
import * as React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
export default function BlogCareer({ data }) {
  const iconCenter = `./images/svg/icon/center-blog.svg`;
  return (
    <>
      <div className="lg:my-20 my-8">
        <p className="mb-8 md:mb-11 text-title_32_44_700 md:text-title_56_64_700 uppercase text-black">
          <span className="split-text-blogs">Career</span>
        </p>

        <div className="grid grid-cols-3 gap-4">
          {data.map((item, index) => (
            <Link href={`./blog/${item?.id}`} key={index}>
              <div className="col-span-3 md:col-span-1">
                <div className="md:mb-8 mb-4 image-container">
                  <motion.img
                    src="./images/test.jpg"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
                    alt="Portfolio project"
                    whileHover={{ scale: 1.2 }}
                    className="h-[252px] md:h-[288px] rounded-lg w-full"
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  />
                </div>
                <p className="text-black text-title_20_28_700 md:mb-3 mb-2">
                  {item?.name}
                </p>

                <div className="flex text-gray text_13_16_600">
                  <p>By Metub Team</p>
                  <img src={iconCenter} alt="" className="mx-5" />
                  <p>Feb 2023</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
