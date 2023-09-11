/* eslint-disable prettier/prettier */
'use client';
import React from 'react';

const UIHomeClient = () => {
  const Text = [
    '50 live commerce studio',
    'fully & professional equipments',
    'livestream operation team',
    'ekip production',
  ];
  const textClient = [
    'Livestreams/ day on social platforms',
    'sellers',
    'Creators joined network',
    'views/ day',
    'Livestreams/ day on e-com platforms',
  ];
  return (
    <>
      <div className="w-full md:mb-[120px] mb-[60px]">
        <div className="h-auto bg_main py-[125px] overflow-x-hidden">
          <div className="lg:px-[112px] md:pb-[94px] pb-10">
            <h4 className="text-primary mb-4 text-title_sm md:text-center px-2.5 md:px-0">
              OUR CLIENTS
            </h4>
            <p className="uppercase md:text-center px-2.5 md:px-0 text-title_32_44_700 md:text-title_lg text-white">
              we’re Proud to be a long-term companion of
              <span className="split-text ms-1">
                vietnam’s leading brands
              </span>{' '}
              in multiple categories
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
                  <div className="imageGroup md:m-0" key={index}>
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

      <div className="lg:px-[112px] px-5">
        <div className="grid grid-cols-3 mb-[50px] md:mb-[60px] text-black">
          <div className="md:col-span-2 col-span-3 md:me-4 me-0">
            <div className="grid grid-cols-3 gap-3 md:gap-4 md:mb-0 mb-[60px]">
              {Text.map((_, index) => (
                <div
                  className={
                    index === 0 || index === 3 ? 'col-span-1' : 'col-span-2'
                  }
                  key={index}
                >
                  <img
                    src="/images/test.jpg"
                    alt=""
                    className="w-full md:h-[196px] h-[120px] rounded-5"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-1 col-span-3">
            {Text.map((item, index) => (
              <div
                className="flex xxl:mb-20 md:mb-9 mb-6 items-baseline"
                key={index}
              >
                <img
                  src="/images/svg/services_svg/icon_services.svg"
                  alt=""
                  className="me-5 md:me-4"
                />
                <p className="text-primary lg:text-title_28_32_700 uppercase text-title_20_28_700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg_client_home lg:px-[112px] lg:py-[80px] px-5 py-20">
        <div className="grid grid-cols-5">
          {textClient.map((item, index) => (
            <div
              className="md:col-span-1 col-span-5 md:mb-0 mb-[60px]"
              key={index}
            >
              <h1 className="text-center text-title_48_64_700">100+</h1>
              <p className="text-center text-base font-bold md:text-title_20_28_700">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UIHomeClient;
