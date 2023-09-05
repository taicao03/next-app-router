'use client';

import Link from 'next/link';
import Button from '@/components/common/ui/button';
// import Carousel from '@/components/common/ui/slider/index';

const UICreator = () => {
  // const CarouselData = [
  //   'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=662&q=80',
  //   'https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80',
  //   'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
  //   'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
  //   'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
  //   'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80',
  // ];
  return (
    <div className="lg:px-[133px] mx-2.5">
      <div className="mb-14">
        <h2 className="md:text-title_sm mb-4 text-primary md:text-center text-title_20_28_700">
          OUR CREATOR
        </h2>
        <div className="md:text-center md:text-title_lg text-title_32_44_700 uppercase">
          <span className="text-black">Meet our</span>
          <span className="split-text md:ms-1">“livestream by passion”</span>
        </div>
        <div className="md:text-center md:text-title_lg text-title_32_44_700 text-black uppercase">
          creator partner
        </div>
      </div>
      <div className="md:flex mb-[80px]">
        <div className="md:w-6/12">
          {/* <Carousel Data={CarouselData} /> */}
        </div>
        <div className="md:w-6/12">
          <h2 className="text-title_sm text-black mb-3">Châu Bùi</h2>
          <Link
            href={'/'}
            className="md:text-base_secondary text_15_28_400 text-primary mb-3"
          >
            @melive.official
          </Link>
          <p className="md:text-base_secondary text-gray mb-7 text_15_28_400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud. Ut enim ad minim veniam, quis
            nostrud. Ut enim ad minim veniam, quis nostrud.
          </p>
          <div className="">
            <Button type="" text="See more" classname={`py-4 px-16`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UICreator;
