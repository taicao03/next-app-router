/* eslint-disable prettier/prettier */
'use client';

import Link from 'next/link';

const UITSPServices = [
  {
    title: 'Content Direction',
    icon: '/images/svg/services_svg/item_1.svg',
  },
  {
    title: 'Livestream Optimization',
    icon: '/images/svg/services_svg/item_2.svg',
  },
  {
    title: 'Livestream Optimization',
    icon: '/images/svg/services_svg/item_3.svg',
  },
  {
    title: 'Livestream Optimization',
    icon: '/images/svg/services_svg/item_4.svg',
  },
];
const MCNServices = [
  {
    title: 'Content Direction',
    icon: '/images/svg/services_svg/item_1.svg',
  },
  {
    title: 'Livestream Optimization',
    icon: '/images/svg/services_svg/item_2.svg',
  },
  {
    title: 'Livestream Optimization',
    icon: '/images/svg/services_svg/item_3.svg',
  },
  {
    title: 'Livestream Optimization',
    icon: '/images/svg/services_svg/item_6.svg',
  },
];

const UIHomeServices = () => {
  return (
    <>
      <div className="lg:px-[112px] mb-20 px-5">
        <div className="md:text-center uppercase md:mb-16 mb-[60px]">
          <div className="text-primary mb-4 text-title_20_28_700">
            OUR SERVICES
          </div>
          <div className="md:text-title_lg text-title_32_44_700">
            <span className="text-black">Unlock the</span>
            <br className="md:block hidden" />
            <span className="split-text ms-1">power of your passion</span>
          </div>
        </div>

        <div className="">
          <h2 className="text-black text-title_md md:mb-11 mb-8">
            TSP Services
          </h2>
          <div className="grid grid-cols-5 gap-5">
            {UITSPServices.map((item, index) => (
              <div className="md:col-span-1 col-span-5" key={index}>
                <div
                  className="md:mb-12 flex items-center md:block"
                  key={index}
                >
                  <div className="flex justify-center">
                    <div
                      className={`${
                        index === 2 ? 'bg-primary' : 'border border-primary'
                      } md:py-4 md:px-5 py-2 px-2.5 rounded-full`}
                    >
                      <img
                        src={
                          index === 2
                            ? '/images/svg/services_svg/item_5.svg'
                            : item?.icon
                        }
                        alt=""
                        className="md:w-[52px] md:h-[52px] w-[32px] h-[32px]"
                      />
                    </div>
                  </div>
                  <p
                    className={`${
                      index === 2 ? 'text-primary' : 'text-black'
                    } text-center ms-3 md:ms-0 md:text-title_20_32_600 text-text_sm md:mt-4`}
                  >
                    {item?.title}
                  </p>
                </div>
              </div>
            ))}
            <div className="md:col-span-1 col-span-5">
              <div className="md:mb-12 mb-6 flex items-center md:block">
                <div className="flex justify-center">
                  <div className="bg-black md:py-4 md:px-5 py-2 px-2.5 rounded-full">
                    <img
                      src="/images/svg/services_svg/see-more.svg"
                      alt=""
                      className="md:w-[52px] md:h-[52px] w-[32px] h-[32px]"
                    />
                  </div>
                </div>
                <Link href="/" className="cursor-pointer">
                  <p className="text-center text-black ms-3 md:ms-0 md:text-title_20_32_600 text-text_sm md:mt-4">
                    {'See more >>'}
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <h2 className="text-black text-title_md md:mb-11 mb-8">
            MCN Services
          </h2>
          <div className="grid grid-cols-5 gap-5">
            {MCNServices.map((item, index) => (
              <div className="md:col-span-1 col-span-5" key={index}>
                <div
                  className="md:mb-12 flex items-center md:block"
                  key={index}
                >
                  <div className="flex justify-center">
                    <div className="border border-primary md:py-4 md:px-5 py-2 px-2.5 rounded-full">
                      <img
                        src={item?.icon}
                        alt=""
                        className="md:w-[52px] md:h-[52px] w-[32px] h-[32px]"
                      />
                    </div>
                  </div>
                  <p className="text-center text-black ms-3 md:ms-0 md:text-title_20_32_600 text-text_sm md:mt-4">
                    {item?.title}
                  </p>
                </div>
              </div>
            ))}
            <div className="md:col-span-1 col-span-5">
              <div className="md:mb-12 flex items-center md:block">
                <div className="flex justify-center">
                  <div className="bg-black md:py-4 md:px-5 py-2 px-2.5 rounded-full">
                    <img
                      src="/images/svg/services_svg/see-more.svg"
                      alt=""
                      className="md:w-[52px] md:h-[52px] w-[32px] h-[32px]"
                    />
                  </div>
                </div>
                <Link href="/" className="cursor-pointer">
                  <p className="text-center text-black ms-3 md:ms-0 md:text-title_20_32_600 text-text_sm md:mt-4">
                    {'See more >>'}
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UIHomeServices;
