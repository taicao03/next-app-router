/* eslint-disable prettier/prettier */
import React from 'react';
import { motion } from 'framer-motion';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Scrollbar, Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/scrollbar';
export default function SliderCarouse({ data }) {
  return (
    <>
      <Swiper
        className="custom"
        spaceBetween={0}
        slidesPerView={3}
        allowTouchMove={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        centeredSlidesBounds={true}
        navigation={{ nextEl: '.carousel-next', prevEl: '.carousel-prev' }}
        loop={true}
        modules={[Scrollbar, Navigation, Pagination, Autoplay]}
        scrollbar={true}
        pagination={{ clickable: true }}
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index}>
            <motion.img
              src={`${process.env.NEXT_PUBLIC_API_URL_BASE}/${item?.image_portrait}`}
              alt={`Creator`}
              className="mb-[60px] mt-3"
            />
          </SwiperSlide>
        ))}
        <div className="flex justify-between absolute top-2/4 lg:right-0 lg:left-0 md:right-12 md:left-12 left-4 right-4 z-10">
          <button className="carousel-prev bg-white p-3 rounded-full border border-border">
            <img src="/images/svg/icon/chevron-left.svg" alt="" />
          </button>
          <button className="carousel-next p-3 bg-primary rounded-full">
            <img src="/images/svg/icon/chevron-right.svg" alt="" />
          </button>
        </div>
      </Swiper>
    </>
  );
}
