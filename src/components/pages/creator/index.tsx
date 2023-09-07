'use client';
import Navbar from '@/components/common/nav';
import { motion } from 'framer-motion';
import Button from '@/components/common/ui/button';
import Slider from '@/components/common/ui/slider-creator/index';
import PropTypes from 'prop-types';

export default function Creator({ data }) {
  console.log(data);
  const UIcanOFFER = [
    {
      title: 'Content Direction',
      icon: './images/svg/creator_svg/content.svg',
      text: 'Giving advices to creators for  developing tiktok channel.',
    },
    {
      title: 'Channel Optimization',
      icon: './images/svg/creator_svg/channel.svg',
      text: "As TikTok Shop specialist, meLive takes care & optimize creator's channel.",
    },
    {
      title: 'Livestream Optimization',
      icon: './images/svg/creator_svg/livestream-white.svg',
      text: 'Training and optimizing the efficiency of livestream operation',
    },
    {
      title: 'Brand Collaboration',
      icon: './images/svg/creator_svg/brand.svg',
      text: 'Connect & Create opportunities for cooperation with the reputational brands',
    },
    {
      title: 'BE OUR EXCLUSIVE CREATOR!',
      icon: './images/svg/creator_svg/creator.svg',
      text: 'And received unique benefits & support from',
      des: 'THE PASSION TEAM.',
    },
  ];

  return (
    <>
      <Navbar type={true} />

      <motion.div
        animate={{
          opacity: 1,
          y: 0,
        }}
        initial={{ opacity: 0, y: 20 }}
        exit={{ opacity: 0, y: 20 }}
      >
        <div className="lg:px-[112px] px-5">
          <div className="grid grid-cols-2 gap-4 md:mb-[100px] mb-[60px]">
            <div className="md:col-span-1 col-span-2">
              <p className="uppercase md:mb-9 text-left mb-8 md:px-0 text-title_44_53_700 lg:text-title_lg text-black">
                Meet our
                <br />
                <span className="split-text">
                  “livestream <br className="md:hidden" /> by passion”
                </span>
                <br />
                creator partner
              </p>
              <Button type="buton" text="See more >>" classname="px-14 py-4" />
            </div>
            <div className="md:col-span-1 col-span-2">
              <div className="text-black">dadsa</div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 md:mb-[100px] mb-[60px]">
            <div className="md:col-span-1 col-span-4">
              <p className="uppercase md:mb-9 text-left mb-8 md:px-0 text-title_44_53_700 lg:text-title_lg text-black">
                WE <br className="hidden md:block" /> can
                <br className="hidden md:block" />
                <span className="split-text ms-1">offer</span>
              </p>
            </div>

            <div className="md:col-span-3 col-span-4">
              <div className="grid grid-cols-3 lg:gap-8 gap-2">
                {UIcanOFFER.map((item, index) => (
                  <div
                    className={`group ${
                      index === 4
                        ? 'md:col-span-2 col-span-3 bg-black'
                        : 'md:col-span-1 col-span-3 border-primary border'
                    } ${
                      index === 2
                        ? 'md:relative md:-top-5 md:bg-primary text-white'
                        : ''
                    } cursor-pointer hover md:mb-0 mb-3 px-5 md:py-4 py-6 text-black rounded-3`}
                    key={index}
                  >
                    <img
                      src={item?.icon}
                      className={`${index === 2 ? 'md:block hidden' : ''}`}
                      alt=""
                    />

                    {index === 2 && (
                      <img
                        src="./images/svg/creator_svg/livestream.svg"
                        alt=""
                        className="md:hidden"
                      />
                    )}
                    <h2
                      className={`mb-1 mt-5 ${
                        index === 4
                          ? 'text-white text-title_20_32_600 md:text-title_28_36_600'
                          : index === 2
                          ? 'md:text-white text-black lg:text-title_20_32_600 text-text_sm'
                          : 'lg:text-title_20_32_600 text-text_sm'
                      }`}
                    >
                      {item?.title}
                    </h2>
                    <p
                      className={`text-base ${
                        index === 4
                          ? 'text-white mb-1'
                          : index === 2
                          ? 'md:text-white text-gray'
                          : 'text-gray'
                      }`}
                    >
                      {item?.text}
                    </p>
                    <p className="text-primary uppercase">{item?.des}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg_main lg:px-[112px] px-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="md:col-span-1 col-span-2">
              <p className="uppercase md:mb-9 text-left mb-8 md:px-0 text-title_44_53_700 lg:text-title_lg text-white">
                One CLICK away from your
                <br className="md:block hidden" />
                <span className="split-text ms-1">passion crew</span>
                <br />
              </p>

              <Button
                type="buton"
                text="Join now >>"
                classname="px-14 py-4 md:px-6 bg-white text-primary"
              />
            </div>
            <div className="md:col-span-1 col-span-2">
              <div className="grid grid-cols-3 gap-4">anhr</div>
            </div>
          </div>
        </div>

        <div className="lg:px-[112px] px-5 py-20">
          <div className="grid grid-cols-2 gap-4">
            <div className="md:col-span-1 col-span-2">
              <p className="uppercase md:mb-9 text-left mb-8 md:px-0 text-title_44_53_700 lg:text-title_lg text-black">
                UNLOCK THE POWER OF
                <br />
                <span className="split-text">YOUR PASSION</span>
                <br />
              </p>
            </div>
          </div>
        </div>
        <div className="px-5 lg:px-[112px]">
          <Slider data={data} />
        </div>
      </motion.div>
    </>
  );
}

Creator.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      avatar: PropTypes.string,
    }),
  ),
};
