'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/common/nav';
import { motion } from 'framer-motion';
import Button from '@/components/common/ui/button';
import Link from 'next/link';
import Popup from '@/components/common/ui/popup';
import PropTypes from 'prop-types';

const LibraryItem = ({ dataAll }) => {
  const getData = dataAll?.data?.results;

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [detailData, setDetailData] = useState(null);
  const [isDetail, setDetail] = useState(null);
  const [isFiled, setFiled] = useState(true);

  // const filterCatogory = dataAll.filter((item) => item.type === isFiled);

  const handleClick = (data) => {
    setFiled(data);
  };
  const openPopup = (id) => {
    setIsPopupOpen(true);
    setDetail(id);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setDetail(null);
    setDetailData(null);
  };

  const uiBtn = [
    { name: 'Fashion', value: true },
    { name: 'Beauty', value: false },
    { name: 'Other', value: true },
  ];

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL_CATEGORIES}/${isDetail}`,
        {
          method: 'POST',
          mode: 'no-cors',
          redirect: 'follow',
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          },
        },
      );

      const data = await response.json();
      setDetailData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if (isPopupOpen === true) {
      fetchData();
    }
  }, [isPopupOpen === true]);

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
        <div className="lg:px-[112px] px-5 py-[60px] lg:py-20">
          <div className="text-black lg:text-title_56_64_700 text-title_32_44_700 text-center md:mb-11 mb-7 uppercase">
            CaTEGORIES
          </div>
          <div className="md:flex md:justify-center mb-6 md:mb-14">
            <div className="grid grid-cols-3 md:gap-3 gap-2">
              {uiBtn.map((item, index) => (
                <div
                  key={index}
                  onKeyDown={handleClick}
                  onClick={() => handleClick(item?.value)}
                  className={`py-2 md:px-10 px-4 cursor-pointer rounded-61px text-center md:text-text_sm text-text_13_16_600 ${
                    item?.value === isFiled
                      ? 'bg-primary'
                      : 'border border-border text-black'
                  }`}
                >
                  {item?.name}
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-4 grid-cols-2 mb-10 md:mb-11">
            {getData.map((item, index) => (
              <div key={index} className="col-span-1 md:col-span-1">
                <div
                  className="cursor-pointer"
                  onClick={() => openPopup(item?.id)}
                  onKeyDown={openPopup}
                >
                  <div className="mb-3 image-container rounded-lg">
                    <motion.img
                      src={`${process.env.NEXT_PUBLIC_API_URL_BASE}/${item?.image_square}`}
                      initial={{ opacity: 0.2, y: 150 }}
                      animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
                      alt={item?.name}
                      whileHover={{ scale: 1.2 }}
                      className="h-[162px] md:h-[216px] rounded-lg w-full"
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    />
                  </div>
                  <p className="mb-1 text-text_sm md:text-title_20_32_600 text-black">
                    <span className="hover:text-primary hover:underline">
                      {item?.name}
                    </span>
                  </p>
                </div>
                <Link
                  href={'/'}
                  className="text-primary text-text_13_16_400 md:text-base"
                >
                  {item?.channel}
                </Link>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Button type="buton" text="Load more" classname="px-14 py-4" />
          </div>
        </div>
      </motion.div>

      <Popup isOpen={isPopupOpen} onRequestClose={closePopup} data={detailData}>
        <button
          className="bg_close rounded-full p-2 focus-within:bg-primary absolute right-5 top-2 z-10"
          onClick={closePopup}
        >
          <img src="/images/svg/icon/close.svg" className="h-5 w-5" alt="" />
        </button>
      </Popup>
    </>
  );
};

export default LibraryItem;
LibraryItem.propTypes = {
  dataAll: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      avatar: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
};
