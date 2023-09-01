'use client';

// import Link from 'next/link';
// import Button from '@/components/common/ui/button';

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
    <div className="md:px-[215px]">
      <div className="text-center uppercase mb-16">
        <div className="text-primary mb-4 text-title_sm">OUR SERVICES</div>
        <div className="text-title_lg">
          <span className="text-black">Unlock the</span>
          <span className="split-text md:ms-1">power of your passion</span>
        </div>
      </div>
      <div className="md:flex">
        <div className="md:w-6/12">
          <h2 className="text-primary text-title_md md:mb-14">TSP Services</h2>
          {UIServices.map((item, index) => (
            <div className="flex md:mb-12 items-center" key={index}>
              <img src={item?.icon} alt="" />
              <p className="ms-5 text-black text-title">{item?.title}</p>
            </div>
          ))}
        </div>
        <div className="md:w-6/12">
          <h2 className="text-primary text-title_md md:mb-14">TSP Services</h2>
          {UIServices.map((item, index) => (
            <div key={index} className="flex md:mb-12 items-center">
              <img src={item?.icon} alt="" />
              <p className="ms-5 text-black text-title">{item?.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UIHomeServices;
