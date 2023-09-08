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

const UIHomeServices = () => {
  return (
    <>
      <div className="lg:px-[112px] mb-[136px] px-5">
        <div className="text-center uppercase md:mb-16 mb-[60px]">
          <div className="text-primary mb-4 text-title_sm">OUR SERVICES</div>
          <div className="md:text-title_lg text-title_32_44_700">
            <span className="text-black">Unlock the</span>
            <br />
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
                <Link href="" className="cursor-pointer">
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
            {UITSPServices.map((item, index) => (
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
                <Link href="" className="cursor-pointer">
                  <p className="text-center text-black ms-3 md:ms-0 md:text-title_20_32_600 text-text_sm md:mt-4">
                    {'See more >>'}
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:px-[112px] mx-5">
        <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-1 mb-[50px] md:mb-[60px] text-black">
          <div className="md:col-span-2 col-span-3 md:me-4 me-0">
            <div className="flex mb-3">
              <div className="w-8/12">
                <img
                  src="https://tse3.mm.bing.net/th?id=OIP.3RkkI40H5sdq_LEg6Y7YwgHaEK&pid=Api&P=0&h=180"
                  alt=""
                  className="w-full md:h-[196px] h-[120px] rounded-5"
                />
              </div>
              <div className="w-4/12 ms-3">
                <img
                  src="https://tse3.mm.bing.net/th?id=OIP.3RkkI40H5sdq_LEg6Y7YwgHaEK&pid=Api&P=0&h=180"
                  alt=""
                  className="w-full md:h-[196px] h-[120px] rounded-5"
                />
              </div>
            </div>
            <div className="flex mb-3 md:mb-0">
              <div className="w-4/12 me-3">
                <img
                  src="https://tse3.mm.bing.net/th?id=OIP.3RkkI40H5sdq_LEg6Y7YwgHaEK&pid=Api&P=0&h=180"
                  alt=""
                  className="w-full md:h-[196px] h-[120px] rounded-5"
                />
              </div>
              <div className="w-8/12">
                <img
                  src="https://tse3.mm.bing.net/th?id=OIP.3RkkI40H5sdq_LEg6Y7YwgHaEK&pid=Api&P=0&h=180"
                  alt=""
                  className="w-full md:h-[196px] h-[120px] rounded-5"
                />
              </div>
            </div>
          </div>

          <div className="h-full md:col-span-1 col-span-3">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.3RkkI40H5sdq_LEg6Y7YwgHaEK&pid=Api&P=0&h=180"
              alt=""
              className="w-full md:h-full rounded-5 h-[335px]"
            />
          </div>
        </div>
        <div className="md:flex">
          {UITSPServices.map((item, index) => (
            <div
              key={index}
              className="md:w-3/12 flex md:block items-center mb-6 md:mb-0"
            >
              <div className="md:flex md:justify-center">
                <img
                  src={item?.icon}
                  alt=""
                  className="md:w-[66px] md:h-[66px] w-[44px] h-[44px]"
                />
              </div>
              <p className="ms-5 text-black md:text-title text-center text-text_sm md:mt-5">
                {item?.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UIHomeServices;
