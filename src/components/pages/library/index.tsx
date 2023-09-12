'use client';

import React, { useState } from 'react';
import Navbar from '@/components/common/nav';
import { motion } from 'framer-motion';
import Button from '@/components/common/ui/button';
import Link from 'next/link';
import Popup from '@/components/common/ui/popup';
const LibraryItem = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isFiled, setFiled] = useState(1);
  const handleClick = (data) => {
    setFiled(data);
  };
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
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
                  className={`py-2 md:px-10 px-4 cursor-pointer rounded-61px text-center md:text-text_sm text-text_13_16_600 ${
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
                <div
                  className="cursor-pointer"
                  onClick={openPopup}
                  onKeyDown={closePopup}
                >
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
                    <span className="hover:text-primary hover:underline">
                      Grey D
                    </span>
                  </p>
                </div>
                <Link
                  href={'/'}
                  className="text-primary text-text_13_16_400 md:text-base"
                >
                  @chaubui.official
                </Link>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Button type="buton" text="Submit" classname="px-14 py-4" />
          </div>
        </div>
      </motion.div>
      <Popup isOpen={isPopupOpen} onRequestClose={closePopup}>
        <button
          className="bg_close rounded-full p-2 focus-within:bg-primary absolute right-5 top-2 z-10"
          onClick={closePopup}
        >
          <img src="/images/svg/icon/close.svg" className="h-5 w-5" alt="" />
        </button>
        <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
          <div className="md:col-span-1 col-span-2">
            <div className="icon-img relative before:absolute before:content-[''] after:content-['] after:md:h-[48px] after:md:w-[48px]  after:h-[40px] after:w-[40px] before:md:h-[56px] before:md:w-[56px] before:w-[48px] before:h-[48px] before:top-[55%] before:left-[-25px] before:rounded-[100px]">
              <img
                src="/images/test.jpg"
                alt=""
                className="rounded-b-[500px] lg:h-[488px] h-[415px]"
              />
            </div>
          </div>
          <div className="md:col-span-2 col-span-2">
            <h2 className="lg:text-title_44_52_600 text-title_28_36_600 text-black mb-1">
              Chau Bui
            </h2>
            <div>
              <Link href={'/'} className="text-primary text-base mb-2">
                @melive.official
              </Link>
              <p className="text-gray text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud. Ut enim ad minim veniam,
                quis nostrud. Ut enim ad minim veniam, quis nostrud.
              </p>
            </div>
          </div>
        </div>
      </Popup>
    </>
  );
};

export default LibraryItem;
