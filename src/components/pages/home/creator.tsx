/* eslint-disable prettier/prettier */
'use client';

import Carousel from '@/components/common/ui/slider-carouce';

const UICreator = () => {
  const a = [
    {
      title: '1313',
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
    <div className="lg:px-[133px]">
      <div className="mb-14 md:px-0 px-5">
        <h2 className="md:text-title_sm mb-4 text-primary md:text-center text-title_20_28_700">
          OUR CREATOR
        </h2>
        <div className="md:text-center md:text-title_lg text-title_32_44_700 uppercase">
          <span className="text-black">Meet our</span>
          <span className="split-text md:ms-1">“livestream by passion”</span>
        </div>
        <div className="md:text-center md:text-title_lg text-title_32_44_700 text-black uppercase">
          creator partner
        </div>
      </div>
      <div className="mb-[80px]">
        <Carousel data={a} />
      </div>
    </div>
  );
};

export default UICreator;
