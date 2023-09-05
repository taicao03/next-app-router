'use client';
import Navbar from '@/components/common/nav';
import Button from '@/components/common/ui/button';
import UiBrandsContent from './content';
const BrandsClient = () => {
  const itemSocial = [
    {
      icon: '/images/svg/icon/social-isn.svg',
      text: 'INSTAGRAM',
    },
    {
      icon: '/images/svg/icon/social-facebook.svg',
      text: 'FACEBOOK',
    },
    {
      icon: '/images/svg/icon/social-spotify.svg',
      text: 'SPOTIFY',
    },
    {
      icon: '/images/svg/icon/social-tiktok.svg',
      text: 'TIKTOK',
    },
    {
      icon: '/images/svg/icon/social-apple.svg',
      text: 'APPLE MUSIC',
    },
    {
      icon: '/images/svg/icon/social-youtube.svg',
      text: 'YOUTUBE',
    },
  ];
  return (
    <>
      <Navbar type={false} />
      <div className="relative -top-20">
        <div className="bg-black bg_main w-full">
          <div className="md:flex mx-2.5 py-[120px] md:px-[112px]">
            <div className="md:w-6/12">
              <p className="uppercase md:mb-9 mb-8 md:text-center px-2.5 md:px-0 text-title_32_44_700 md:text-title_lg text-white">
                {`we're Proud to be a long-term companion of`}
                <span className="split-text ms-1">
                  {`vietnam's leading brands`}
                </span>
                in multiple categories
              </p>
              <Button
                type=""
                classname="bg-white text-primary"
                text={`See more`}
              />
            </div>
            <div className="md:w-6/12"></div>
          </div>
        </div>
        <div className="bg-primary overflow-x-hidden py-[42px] text-title_sm">
          <div className="wrapper-run">
            <div className="marquee">
              <div className="runningLeft">
                {itemSocial.map((item, index) => (
                  <div className="imageGroup" key={index}>
                    <div className="flex items-center">
                      <img src={item.icon} className="mr-2" alt="" />
                      <p>{item?.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="runningLeft">
                {itemSocial.map((item, index) => (
                  <div className="imageGroup" key={index}>
                    <div className="flex items-center">
                      <img src={item.icon} className="mr-2" alt="" />
                      <p>{item?.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* content */}
      <UiBrandsContent />
    </>
  );
};

export default BrandsClient;
