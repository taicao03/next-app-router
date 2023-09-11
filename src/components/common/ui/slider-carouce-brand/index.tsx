/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import Button from '@/components/common/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Scrollbar, Navigation, Pagination, Thumbs } from 'swiper/modules';
import 'swiper/css/scrollbar';
export default function SliderCarouse({ data }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const handleSwiperInit = (swiper) => {
    setThumbsSwiper(swiper);
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="lg:col-span-2 col-span-4 relative">
        <Swiper
          className="custom"
          spaceBetween={0}
          slidesPerView={3}
          allowTouchMove={false}
          centeredSlides={true} // Để ảnh ở giữa lớn hơn
          centeredSlidesBounds={true} // Đảm bảo cả 3 ảnh đều hiển thị thẳng
          navigation={{ nextEl: '.carousel-next', prevEl: '.carousel-prev' }}
          loop={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Scrollbar, Thumbs, Navigation, Pagination]}
          scrollbar={true}
          pagination={{ clickable: true }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.img
                src={item?.avatar}
                alt={item + index}
                className="my-[60px]"
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
      </div>
      <div className="lg:col-span-2 col-span-4">
        <Swiper
          className=""
          loop={true}
          spaceBetween={10}
          allowTouchMove={false}
          slidesPerView={1}
          onSwiper={handleSwiperInit}
          modules={[Scrollbar, Navigation, Pagination, Thumbs]}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index} className="px-5 lg:px-0">
              <h2 className="text-title_sm text-black mb-3">{item?.name}</h2>
              <Link
                href={'/'}
                className="md:text-base_secondary text_15_28_400 text-primary mb-3"
              >
                @melive.official
              </Link>
              <p className="md:text-base_secondary text-gray mb-7 text_15_28_400 text-trunce-5">
                {item?.description}
              </p>
              <div className="">
                <Button type="" text="See more" classname={`py-4 px-16`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
