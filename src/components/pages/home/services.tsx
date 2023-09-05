'use client';

// import Link from 'next/link';
import Button from '@/components/common/ui/button';

const UIServices = [
  {
    title: 'Video Content Consultant',
    icon: '/images/svg/services_svg/channel.svg',
  },
  {
    title: 'Video Content Consultant',
    icon: '/images/svg/services_svg/creator.svg',
  },
  {
    title: 'Video Content Consultant',
    icon: '/images/svg/services_svg/livestream.svg',
  },
  {
    title: 'Video Content Consultant',
    icon: '/images/svg/services_svg/video.svg',
  },
];

const UIHomeServices = () => {
  return (
    <>
      <div className="lg:px-[215px] mb-[136px] mx-5">
        <div className="text-center uppercase md:mb-16 mb-[60px]">
          <div className="text-primary mb-4 text-title_sm">OUR SERVICES</div>
          <div className="md:text-title_lg text-title_32_44_700">
            <span className="text-black">Unlock the</span>
            <span className="split-text md:ms-1">power of your passion</span>
          </div>
        </div>

        <div className="md:flex">
          <div className="md:w-6/12">
            <h2 className="text-primary text-title_md md:mb-14 mb-8">
              TSP Services
            </h2>
            {UIServices.map((item, index) => (
              <div className="flex md:mb-12 items-center mb-6" key={index}>
                <img
                  src={item?.icon}
                  alt=""
                  className="md:w-[66px] md:h-[66px] w-[44px] h-[44px]"
                />
                <p className="ms-5 text-black md:text-title text-text_sm">
                  {item?.title}
                </p>
              </div>
            ))}
            <div className="mb-[60px] md:mb-0">
              <Button text={`See more >>`} type="" classname="px-[60px] py-4" />
            </div>
          </div>
          <div className="md:w-6/12">
            <h2 className="text-primary text-title_md md:mb-14 mb-8">
              MCN Services
            </h2>
            {UIServices.map((item, index) => (
              <div key={index} className="flex md:mb-12 items-center mb-6">
                <img
                  src={item?.icon}
                  alt=""
                  className="md:w-[66px] md:h-[66px] w-[44px] h-[44px]"
                />
                <p className="ms-5 text-black md:text-title text-text_sm">
                  {item?.title}
                </p>
              </div>
            ))}
            <div className="mb-[60px] md:mb-0">
              <Button text={`See more >>`} type="" classname="px-[60px] py-4" />
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
          {UIServices.map((item, index) => (
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
