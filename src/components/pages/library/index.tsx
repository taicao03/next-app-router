'use client';
import React, { useState } from 'react';
import Navbar from '@/components/common/nav';
import { motion } from 'framer-motion';
import Button from '@/components/common/ui/button';

const LibraryItem = () => {
  const [isFiled, setFiled] = useState(1);
  const handleClick = (data) => {
    setFiled(data);
  };
  const uiBtn = [
    { name: 'Fashion', value: 1 },
    { name: 'Beauty', value: 2 },
    { name: 'Other', value: 3 },
  ];

  return (
    <>
      <Navbar type={true} />

      <motion.div
        animate={{
          opacity: 1,
          y: 0,
        }}
        initial={{ opacity: 0, y: 20 }}
        exit={{ opacity: 0, y: 20 }}
      >
        <div className="lg:px-[112px] px-5 py-[60px] lg:py-20">
          <div className="text-black lg:text-title_56_64_700 text-title_32_44_700 text-center md:mb-11 mb-7 uppercase">
            CaTEGORIES
          </div>
          <div className="md:flex md:justify-center mb-6 md:mb-14">
            <div className="grid grid-cols-3 md:gap-3 gap-2">
              {uiBtn.map((item, index) => (
                <div
                  key={index}
                  onKeyDown={handleClick}
                  onClick={() => handleClick(item?.value)}
                  className={`py-2 md:px-10 px-4 rounded-61px text-center md:text-text_sm text-text_13_16_600 ${
                    item?.value === isFiled
                      ? 'bg-primary'
                      : 'border border-border text-black'
                  }`}
                >
                  {item?.name}
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-4 grid-cols-2 mb-10 md:mb-11">
            {Array.from({ length: 10 }, (_, index) => (
              <div key={index} className="col-span-1 md:col-span-1">
                <div className="mb-3 image-container">
                  <motion.img
                    src="./images/test.jpg"
                    initial={{ opacity: 0.2, y: 150 }}
                    animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
                    alt="Portfolio project"
                    whileHover={{ scale: 1.2 }}
                    className="h-[162px] md:h-[216px] rounded-lg w-full"
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  />
                </div>
                <p className="mb-1 text-text_sm md:text-title_20_32_600 text-black">
                  Grey D
                </p>
                <p className="text-primary text-text_13_16_400 md:text-base">
                  @chaubui.official
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Button type="buton" text="Submit" classname="px-14 py-4" />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default LibraryItem;
