/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import Button from '@/components/common/ui/button';
import Link from 'next/link';

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
      <div className="md:col-span-2 col-span-4">
        <Swiper
          className="custom"
          spaceBetween={0}
          slidesPerView={3}
          centeredSlides={true} // Để ảnh ở giữa lớn hơn
          centeredSlidesBounds={true} // Đảm bảo cả 3 ảnh đều hiển thị thẳng
          navigation
          loop
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Scrollbar, Thumbs, Navigation, Pagination]}
          scrollbar={true}
          pagination={{ clickable: true }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index} className="">
              <img src={item?.img} alt="Hình ảnh 1" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="md:col-span-2 col-span-4">
        <Swiper
          className=""
          loop={true}
          spaceBetween={10}
          navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
          slidesPerView={1}
          onSwiper={handleSwiperInit}
          modules={[Scrollbar, Navigation, Pagination, Thumbs]}
          // scrollbar={true}
          pagination={{ clickable: true }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index} className="">
              <h2 className="text-title_sm text-black mb-3">Châu Bùi</h2>
              <Link
                href={'/'}
                className="md:text-base_secondary text_15_28_400 text-primary mb-3"
              >
                @melive.official
              </Link>
              <p className="md:text-base_secondary text-gray mb-7 text_15_28_400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud. Ut enim ad minim veniam,
                quis nostrud. Ut enim ad minim veniam, quis nostrud.
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
