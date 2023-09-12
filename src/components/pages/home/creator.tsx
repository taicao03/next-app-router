/* eslint-disable prettier/prettier */
'use client';

import Carousel from '@/components/common/ui/slider-carouce';

const UICreator = ({ data }) => {
  return (
    <div className="lg:px-[133px]">
      <div className="mb-14 md:px-0 px-5">
        <h2 className="md:text-title_sm mb-4 text-primary md:text-center text-title_20_28_700">
          OUR CREATOR
        </h2>
        <div className="lg:text-title_64_76_700 text-title_32_44_700 uppercase text-black md:text-center">
          Meet our
          <br className="md:hidden" />
          <span className="split-text md:ms-1">
            “livestream by <br className="md:hidden" /> passion”
          </span>
          <br className="hidden md:block" />
          creator partner
        </div>
      </div>
      <div className="mb-[80px]">
        <Carousel data={data} />
      </div>
    </div>
  );
};

export default UICreator;
