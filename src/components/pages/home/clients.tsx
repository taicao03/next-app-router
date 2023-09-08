'use client';
import React from 'react';

const UIHomeClient = () => {
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

        <div className="wrapper-run md:mb-10 mb-4">
          <div className="marquee">
            <div className="runningLeft">
              {Array.from({ length: 5 }, (_, index) => (
                <div className="imageGroup md:m-0" key={index}>
                  <img
                    src={`/images/svg/brands_svg/item_${1 + index}.svg`}
                    className=""
                    alt=""
                  />
                </div>
              ))}
            </div>
            <div className="runningLeft">
              {Array.from({ length: 5 }, (_, index) => (
                <div className="imageGroup md:m-0" key={index}>
                  <img
                    src={`/images/svg/brands_svg/item_${1 + index}.svg`}
                    className=""
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="wrapper-run">
          <div className="marquee">
            <div className="runningRight">
              {Array.from({ length: 5 }, (_, index) => (
                <div className="imageGroup md:m-0" key={index}>
                  <img
                    src={`/images/svg/brands_svg/item_${6 + index}.svg`}
                    className=""
                    alt=""
                  />
                </div>
              ))}
            </div>
            <div className="runningRight">
              {Array.from({ length: 5 }, (_, index) => (
                <div className="imageGroup  md:m-0" key={index}>
                  <img
                    src={`/images/svg/brands_svg/item_${6 + index}.svg`}
                    className=""
                    alt=""
                  />
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
