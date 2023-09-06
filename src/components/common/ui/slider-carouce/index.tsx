import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/scrollbar';
export default function SliderCarouse() {
  const a = [
    {
      img: 'https://tse3.mm.bing.net/th?id=OIP.1cI4dxNV3dGWXpu_5HGMCQHaEK&pid=Api&P=0&h=180',
    },
    {
      img: 'https://tse4.mm.bing.net/th?id=OIP.YTEOUY823LsgxJGAMhi31AHaGl&pid=Api&P=0&h=180',
    },
    {
      img: 'https://tse4.mm.bing.net/th?id=OIP.YTEOUY823LsgxJGAMhi31AHaGl&pid=Api&P=0&h=180',
    },
    {
      img: 'https://tse4.mm.bing.net/th?id=OIP.bWeddDFd01ZrzWqX9bD4zwAAAA&pid=Api&P=0&h=180',
    },
    {
      img: 'https://tse4.mm.bing.net/th?id=OIP.YTEOUY823LsgxJGAMhi31AHaGl&pid=Api&P=0&h=180',
    },
    {
      img: 'https://tse4.mm.bing.net/th?id=OIP.YTEOUY823LsgxJGAMhi31AHaGl&pid=Api&P=0&h=180',
    },
    {
      img: 'https://tse4.mm.bing.net/th?id=OIP.YTEOUY823LsgxJGAMhi31AHaGl&pid=Api&P=0&h=180',
    },
    {
      img: 'https://tse1.mm.bing.net/th?id=OIP.c5LcHm0jmRJ2gkJl55XtgAHaEM&pid=Api&P=0&h=180',
    },
    {
      img: 'https://tse4.mm.bing.net/th?id=OIP.YTEOUY823LsgxJGAMhi31AHaGl&pid=Api&P=0&h=180',
    },
    {
      img: 'https://tse4.mm.bing.net/th?id=OIP.YTEOUY823LsgxJGAMhi31AHaGl&pid=Api&P=0&h=180',
    },
  ];

  return (
    <div className="">
      <Swiper
        className="custom"
        spaceBetween={0}
        slidesPerView={3}
        centeredSlides={true} // Để ảnh ở giữa lớn hơn
        centeredSlidesBounds={true} // Đảm bảo cả 3 ảnh đều hiển thị thẳng
        navigation
        loop
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        scrollbar={true}
        pagination={{ clickable: true }}
      >
        {a.map((item, index) => (
          <SwiperSlide key={index} className="">
            <img src={item?.img} alt="Hình ảnh 1" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
