'use client';
import React from 'react';

const UIHomeClient = () => {
  const data = [
    '/images/svg/client_svg/heineken.svg',
    '/images/svg/client_svg/heineken.svg',
    '/images/svg/client_svg/heineken.svg',
    '/images/svg/client_svg/heineken.svg',
    '/images/svg/client_svg/heineken.svg',
    '/images/svg/client_svg/heineken.svg',
  ];

  return (
    <div className="w-full md:mb-[120px] mb-[60px]">
      <div className="h-auto bg_main py-[125px] overflow-x-hidden">
        <div className="lg:px-[112px] md:pb-[94px] pb-10">
          <h4 className="text-primary mb-4 text-title_sm md:text-center px-2.5 md:px-0">
            OUR CLIENTS
          </h4>
          <p className="uppercase md:text-center px-2.5 md:px-0 text-title_32_44_700 md:text-title_lg text-white">
            we’re Proud to be a long-term companion of
            <span className="split-text ms-1">vietnam’s leading brands</span> in
            multiple categories
          </p>
        </div>
        <div className="wrapper-run">
          <div className="marquee">
            <div className="runningLeft">
              {data.map((item, index) => (
                <div className="imageGroup" key={index}>
                  <img src={item} className="mr-10 test-2" alt="" />
                </div>
              ))}
            </div>
            <div className="runningLeft">
              {data.map((item, index) => (
                <div className="imageGroup" key={index}>
                  <img src={item} className="mr-10 test-2" alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="wrapper-run">
          <div className="marquee">
            <div className="runningRight">
              {data.map((item, index) => (
                <div className="imageGroup" key={index}>
                  <img src={item} className="mr-10" alt="" />
                </div>
              ))}
            </div>
            <div className="runningRight">
              {data.map((item, index) => (
                <div className="imageGroup" key={index}>
                  <img src={item} className="mr-10" alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIHomeClient;
