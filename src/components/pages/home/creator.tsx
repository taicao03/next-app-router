'use client';

import Link from 'next/link';
import Button from '@/components/common/ui/button';

const UICreator = () => {
  return (
    <>
      <div className="mb-14">
        <h2 className="text-title_sm mb-4 text-primary text-center">
          OUR CREATOR
        </h2>
        <div className="text-center text-title_lg">
          <span className="text-black">Meet our</span>
          <span className="split-text">“livestream by passion”</span>
        </div>
        <div className="text-center text-title_lg text-black">
          creator partner
        </div>
      </div>
      <div className="flex mb-[80px]">
        <div className="md:w-6/12"></div>
        <div className="md:w-6/12">
          <h2 className="text-title_sm text-black mb-3">Châu Bùi</h2>
          <Link href={'/'} className="text-base_secondary text-primary mb-3">
            @melive.official
          </Link>
          <p className="text-base_secondary text-gray mb-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud. Ut enim ad minim veniam, quis
            nostrud. Ut enim ad minim veniam, quis nostrud.
          </p>
          <div className="">
            <Button type="" text="See more" />
          </div>
        </div>
      </div>
    </>
  );
};

export default UICreator;
