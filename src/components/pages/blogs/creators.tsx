'use client';
import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function BlogCreators({ data }) {
  console.log(data);
  const iconCenter = `./images/svg/icon/center-blog.svg`;
  return (
    <>
      <div className="lg:my-20 my-8">
        <p className="mb-8 md:mb-11 text-title_32_44_700 md:text-title_56_64_700 uppercase text-black">
          For <span className="split-text-blogs">creators</span>
        </p>

        <div className="grid grid-cols-3 gap-4">
          <div className="lg:col-span-2 md:col-span-3 col-span-3">
            <Link href="/" className="cursor-pointer">
              <div className="md:mb-8 mb-4">
                <img
                  src="./images/test.jpg"
                  className="h-[252px] md:h-[450px] rounded-4 w-full"
                  alt=""
                />
              </div>
              <p className="md:text-title_36_48_700 text-black text-title_sm md:mb-3 mb-2 hover:underline hover:text-primary">
                The Ultimate Freelance Solution for Businesses
              </p>
            </Link>

            <div className="flex">
              <p className="text-gray text_13_16_600">By Metub Team</p>
              <img src={iconCenter} alt="" className="mx-5" />
              <p className="text-gray text_13_16_600">Feb 2023</p>
            </div>
          </div>

          <div className="gap-4 col-span-3 lg:col-span-1 md:col-span-3 mb-0 md:block hidden">
            {Array.from({ length: 5 }, (_, index) => (
              <div className="grid grid-cols-5 gap-4" key={index}>
                <div className="md:col-span-1 lg:col-span-2 col-span-5">
                  <Link href="/" className="cursor-pointer">
                    <div className={`lg:mb-8 md:mb-4 mb-4 image-container`}>
                      <motion.img
                        src="./images/test.jpg"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{
                          opacity: 1,
                          x: 0,
                          transition: { delay: 0.3 },
                        }}
                        alt="Portfolio project"
                        whileHover={{ scale: 1.2 }}
                        className="h-[192px] md:h-[120px] rounded-lg w-full"
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      />
                    </div>
                  </Link>
                </div>

                <div className="md:col-span-3 col-span-5">
                  <Link href="/" className="cursor-pointer">
                    <p className="text-black text-title_20_28_700 md:mb-3 mb-2 hover:underline hover:text-primary">
                      {'The Ultimate Freelance Solution For Businesses'}
                    </p>
                  </Link>
                  <div className="flex lg:whitespace-nowrap">
                    <p className="text-gray text_13_16_600">By Metub Team</p>
                    <img src={iconCenter} alt="" className="mx-2" />
                    <p className="text-gray text_13_16_600">Feb 2023</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* MOBILE */}
          <div className="gap-4 col-span-3 lg:col-span-1 md:col-span-3 mb-0 md:hidden">
            <Swiper slidesPerView={1.3} spaceBetween={20}>
              {Array.from({ length: 5 }, (_, index) => (
                <SwiperSlide key={index}>
                  <div className="grid grid-cols-4 gap-4">
                    <div className="md:col-span-1 lg:col-span-2 col-span-4">
                      <Link href="/" className="cursor-pointer">
                        <div className={`lg:mb-8 md:mb-4 mb-4 image-container`}>
                          <motion.img
                            src="./images/test.jpg"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{
                              opacity: 1,
                              x: 0,
                              transition: { delay: 0.3 },
                            }}
                            alt="Portfolio project"
                            whileHover={{ scale: 1.2 }}
                            className="h-[192px] md:h-[120px] rounded-lg w-full"
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="md:col-span-2 col-span-4">
                      <Link href="/" className="cursor-pointer">
                        <p className="text-black text-title_20_28_700 md:mb-3 mb-2 hover:underline hover:text-primary">
                          {'The Ultimate Freelance Solution For Businesses'}
                        </p>
                      </Link>
                      <div className="flex">
                        <p className="text-gray text_13_16_600">
                          By Metub Team
                        </p>
                        <img src={iconCenter} alt="" className="mx-5" />
                        <p className="text-gray text_13_16_600">Feb 2023</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
