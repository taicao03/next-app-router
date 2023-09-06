'use client';
import * as React from 'react';

export default function BlogCreators() {
  const iconCenter = `./images/svg/icon/center-blog.svg`;
  return (
    <>
      <div className="lg:my-20 my-8">
        <p className="mb-8 md:mb-11 text-title_32_44_700 md:text-title_56_64_700 uppercase text-black">
          For <span className="split-text-blogs">creators</span>
        </p>
        <div className="md:flex">
          <div className="md:w-8/12">
            <div className="md:mb-8 mb-4">
              <img
                src="./images/test.jpg"
                className="h-[252px] md:h-[450px] rounded-4 w-full"
                alt=""
              />
            </div>
            <p className="md:text-title_36_48_700 text-black text-title_sm md:mb-3 mb-2">
              The Ultimate Freelance Solution for Businesses
            </p>
            <div className="flex">
              <p className="text-gray text_13_16_600">By Metub Team</p>
              <img src={iconCenter} alt="" className="mx-5" />
              <p className="text-gray text_13_16_600">Feb 2023</p>
            </div>
          </div>

          <div className="md:w-4/12">
            <div className="flex"></div>
          </div>
        </div>
      </div>
    </>
  );
}
