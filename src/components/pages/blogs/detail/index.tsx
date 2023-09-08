'use client';
import * as React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import Navbar from '@/components/common/nav';
// import Link from 'next/link';
import Orther from './orther';
export default function ListItems({ dataDetailBlogs }) {
  const iconCenter = `/images/svg/icon/center-blog.svg`;
  console.log(dataDetailBlogs);
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
        <div className="lg:mx-80 py-11 mx-5 lg:py-24 border-b border-border">
          <h2 className="md:text-title_36_48_700 mb-4 text-title_28_32_700 text-black">
            Metub is going bigger and expanding internationally
          </h2>
          <div className="md:flex flex-wrap md:justify-between uppercase md:text-sm text-text_13_22_600 font-semibold text-gray">
            <p className="flex mb-3.5 md:mb-0">
              FOR CREATORS
              <img src={iconCenter} alt="" className="mx-5" />
              FEB 17, 2022
            </p>
            <p className="w-full md:w-auto">
              BY<span className="split-text ms-1">METUB TEAM</span>
            </p>
          </div>

          <div className="md:py-16 pt-6 pb-8">
            <img
              src="/images/test.jpg"
              className="rounded-4 h-[255px] md:h-[344px] w-full"
              alt=""
            />
          </div>
          <div className="mb-8">
            <h1 className="text-lg font-semibold md:text-title_20_32_600 text-black mb-6">
              {`Even the big movie studios have invested in growing their social
              media presence as a marketing strategy. And Binge Society is proof
              that it's working.`}
            </h1>
            <p className="text-sm font-normal text-black">
              {` Started just two short years ago in September 2019, they've
              already racked up more than 3 million followers on YouTube alone.
              And Binge Society is just the latest in a growing variety of
              Jellysmack original channels on everything from sports to beauty
              to pranks. So, how does film content become social media content?
              
              
              Aren't social networks all about keeping it short and sweet in the
              era of ever-shrinking attention spans? As it turns out, film
              content goes way beyond feature films themselves. There are gags
              and bloopers, looks behind-the-scenes and compilations, best-ofs
              and iconic scenes. It's really a whole universe to explore.`}
            </p>
          </div>
        </div>

        <Orther dataOther={null} />
      </motion.div>
    </>
  );
}

ListItems.propTypes = {
  dataDetailBlogs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      avatar: PropTypes.string,
    }),
  ),
};
