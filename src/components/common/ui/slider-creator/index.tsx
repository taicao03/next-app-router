import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {
  Scrollbar,
  Navigation,
  Pagination,
  FreeMode,
  Thumbs,
} from 'swiper/modules';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import 'swiper/css/navigation';

export default function SliderCarouse({ data }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const handleSwiperInit = (swiper) => {
    setThumbsSwiper(swiper);
  };

  return (
    <>
      <div className="ccc">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-4">
            <Swiper
              className="main-swiper"
              loop={false}
              spaceBetween={10}
              navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
              slidesPerView={1}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[Scrollbar, FreeMode, Navigation, Pagination, Thumbs]}
              // scrollbar={true}
              pagination={{ clickable: true }}
            >
              {data.map((item, index) => (
                <SwiperSlide key={index} className="">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="md:col-span-1 col-span-3 icon-img-slider md:ms-14 md:mb-14">
                      <img
                        src={item?.avatar}
                        alt="Hình ảnh 1"
                        className="h-[448px] rounded-t-[36px] rounded-b-[500px]"
                      />
                    </div>
                    <div className="col-span-2">
                      <p className="md:text-title_44_58_600 text-title_sm text-black mb-3">
                        {item?.name}
                      </p>
                      <p className="text-primary mb-4">@melive.official</p>
                      <p className="text-gray text-base_secondary text-trunce-5">
                        {item?.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="md:col-span-2 hidden md:block"></div>
          <div className="md:col-span-2 col-span-4 slider-creator-nav-main">
            <Swiper
              onSwiper={handleSwiperInit}
              className="slider-creator-nav"
              loop={false}
              freeMode={false}
              navigation={false}
              watchSlidesProgress={true}
              scrollbar={true}
              breakpoints={{
                300: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
                991: {
                  slidesPerView: 5,
                  spaceBetween: 10,
                },
              }}
              modules={[Scrollbar, FreeMode, Navigation, Pagination, Thumbs]}
              pagination={{ clickable: true }}
            >
              {data.map((item, index) => (
                <SwiperSlide key={index} className="">
                  <img
                    src={item?.avatar}
                    className="h-20 w-20 rounded-full"
                    alt="Hình ảnh 1"
                  />
                </SwiperSlide>
              ))}
              <div className="text-black custom-prev">ưed</div>
              <div className="text-black custom-next">ưed</div>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
