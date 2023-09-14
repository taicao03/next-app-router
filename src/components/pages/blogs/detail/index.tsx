'use client';
import * as React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import Navbar from '@/components/common/nav';
// import Link from 'next/link';
import Orther from './orther';
import Date from '@/components/common/format/date';

export default function ListItems({ dataDetailBlogs }) {
  const iconCenter = `/images/svg/icon/center-blog.svg`;
  const getDataBlogsDetail = dataDetailBlogs?.data?.record;
  const contentDes = getDataBlogsDetail?.content;
  const getFirtCategory = getDataBlogsDetail?.post_category[0];

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
            {getDataBlogsDetail?.name}
          </h2>
          <div className="md:flex flex-wrap md:justify-between uppercase md:text-sm text-text_13_22_600 font-semibold text-gray">
            <p className="flex mb-3.5 md:mb-0">
              <span>{getFirtCategory?.name}</span>
              <img src={iconCenter} alt="" className="mx-5" />
              <Date dateString={getDataBlogsDetail?.created_at} />
            </p>
            <p className="w-full md:w-auto">
              BY<span className="split-text ms-1">METUB TEAM</span>
            </p>
          </div>

          <div className="md:py-16 pt-6 pb-8">
            <img
              src={`${process.env.BASE_URL}/${getDataBlogsDetail?.image}`}
              className="rounded-4 h-[255px] md:h-[344px] w-full"
              alt=""
            />
          </div>
          <div className="mb-8">
            <h1 className="text-lg font-semibold md:text-title_20_32_600 text-black mb-6">
              {getDataBlogsDetail?.description}
            </h1>
            <div
              className="text-sm font-normal text-black"
              dangerouslySetInnerHTML={{
                __html: contentDes,
              }}
            />
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
