import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Scrollbar,
  Navigation,
  Pagination,
  FreeMode,
  Thumbs,
  Autoplay,
} from 'swiper/modules';
import Link from 'next/link';

export default function SliderCarouse({ data }) {
  console.log(data);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const handleSwiperInit = (swiper) => {
    setThumbsSwiper(swiper);
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-4">
          <Swiper
            className="main-swiper"
            loop={true}
            allowTouchMove={false}
            spaceBetween={10}
            navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
            slidesPerView={1}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[
              Scrollbar,
              FreeMode,
              Navigation,
              Pagination,
              Thumbs,
              Autoplay,
            ]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
          >
            {data?.map((item, index) => (
              <SwiperSlide key={index} className="">
                <div className="grid grid-cols-3 gap-4 md:gap-[50px] px-5 md:px-0">
                  <div className="md:col-span-1 col-span-3 icon-img-slider md:ms-14 md:mb-14 before:left-[50px] before:md:left-[25px] before:absolute after:absolute after:md:-left-[40px] after:-left-[10px] after:md:h-[56px] after:top-[65%] after:md:top-[50%] after:md:w-[56px] after:h-[48px] after:w-[48px] before:md:h-[48px] before:md:w-[48px] before:h-[40px] before:w-[40px]">
                    <img
                      src={`${process.env.NEXT_PUBLIC_API_URL_BASE}/${item?.image_portrait}`}
                      alt="Hình ảnh 1"
                      className="h-[448px] rounded-t-[36px] rounded-b-[500px] md:w-auto w-full"
                    />
                  </div>
                  <div className="md:col-span-2 col-span-3 mt-[35px] md:mt-0">
                    <p className="md:text-title_44_58_600 text-title_sm text-black mb-3">
                      {item?.name}
                    </p>
                    <p className="text-primary mb-4">{item?.channel}</p>
                    <p className="text-gray text-base_secondary text-trunce-5 md:mb-[24px] mb-4">
                      {item?.description}
                    </p>
                    <Link
                      href={'/'}
                      className="text-primary uppercase text-text_16_24 font-bold"
                    >
                      READ MORE
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="md:col-span-1 hidden md:block"></div>
        <div className="md:col-span-3 col-span-4 slider-creator-nav-main  md:mx-[90px] mx-[50px]">
          <Swiper
            onSwiper={handleSwiperInit}
            className="slider-creator-nav"
            loop={true}
            allowTouchMove={false}
            freeMode={false}
            navigation={false}
            watchSlidesProgress={true}
            scrollbar={true}
            breakpoints={{
              300: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 4,
              },
              991: {
                slidesPerView: 5,
              },
            }}
            modules={[Scrollbar, FreeMode, Navigation, Pagination, Thumbs]}
            pagination={{ clickable: true }}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index} className="md:mt-[50px] mt-[25px]">
                <img
                  src={`${process.env.NEXT_PUBLIC_API_URL_BASE}/${item?.image_portrait}`}
                  className="h-20 w-20 rounded-full mx-auto cursor-pointer"
                  alt="Hình ảnh 1"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="text-black custom-prev absolute md:top-[50%] top-[40%] -left-[35px]">
            <button
              type="button"
              className="p-2.5 rounded-full bg-white border border-border"
            >
              <img src="/images/svg/icon/chevron-left.svg" alt="" />
            </button>
          </div>
          <div className="text-black custom-next absolute md:top-[50%] md:-right-[50px] top-[40%] -right-[35px]">
            <button type="button" className="bg-primary p-2.5 rounded-full">
              <img src="/images/svg/icon/chevron-right.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
