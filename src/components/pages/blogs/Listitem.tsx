'use client';
import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { addBlog } from '@/app/actions/demoActions/index';
import Input from '@/components/common/ui/input';
import Button from '@/components/common/ui/button';
import Images from '@/components/common/ui/images';
import Select from '@/components/common/ui/select';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
export default function ListItems({ dataAnime }) {
  const images = [
    'https://tse1.mm.bing.net/th?id=OIP.ibNBUEhxk47pnAnVQR8kfQHaEo&pid=Api&P=0&h=180',
    'https://tse4.mm.bing.net/th?id=OIP.iUp2eqWqOILkBkrlgV4GyQHaFT&pid=Api&P=0&h=180',
    'https://tse1.mm.bing.net/th?id=OIP.ibNBUEhxk47pnAnVQR8kfQHaEo&pid=Api&P=0&h=180',
    'https://tse4.mm.bing.net/th?id=OIP.aCdryHDgmSuVLNH2hYRtyAHaFj&pid=Api&P=0&h=180',
  ];
  const [imageIndex, setImageIndex] = useState(0);
  // const PrevArrow = ({ onClick }) => {
  //   return (
  //     <div className="arrow prev" onClick={onClick}>
  //       2
  //     </div>
  //   );
  // };
  // const NextArrow = ({ onClick }) => {
  //   return (
  //     <div className="arrow next" onClick={onClick}>
  //       1
  //     </div>
  //   );
  // };
  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <>
      <div className="App">
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div
              key={idx}
              className={idx === imageIndex ? 'slide activeSlide' : 'slide'}
            >
              <img src={img} alt={img} />
            </div>
          ))}
        </Slider>
      </div>
      <motion.div
        animate={{
          opacity: 1,
          y: 0,
        }}
        initial={{ opacity: 0, y: 20 }}
        exit={{ opacity: 0, y: 20 }}
      >
        <form action={addBlog}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <Input
                  label="Anh"
                  parentClass="sm:col-span-3"
                  name="avatar"
                  placeholder=""
                  value=""
                  req={true}
                />

                <Input
                  label="Tên của bạn"
                  parentClass="sm:col-span-3"
                  name="name"
                  placeholder=""
                  value=""
                  req={true}
                />

                <Input
                  label="Tuổi của bạn"
                  parentClass="sm:col-span-3"
                  name="age"
                  placeholder=""
                  value=""
                  req={true}
                />

                <Input
                  label="Mô tả của bạn"
                  parentClass="sm:col-span-3"
                  name="description"
                  placeholder=""
                  value=""
                  req={true}
                />
                <Select
                  name=""
                  label="123"
                  req=""
                  parentClass="sm:col-span-3"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <Button type="submit" text="Thêm" />
            <Button type="button" text="Thêm" />
          </div>
        </form>

        <div className="hidden">
          <Images alt="2131" className="" src="img-test.jpg" />
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {dataAnime.data.map((item) => (
            <Link className="border-none" key={item.id} href={'/'}>
              <div className="overflow-hidden rounded-lg">
                <div className="image-container">
                  {item.card_images.map((cardImage) => (
                    <motion.img
                      key={cardImage.id}
                      src={cardImage.image_url}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
                      alt="Portfolio project"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    />
                  ))}
                </div>
                <div className="bg-blue-200 p-3 text-xl font-bold">
                  {item.name}
                </div>

                {item?.level && (
                  <div className="bg-blue-200 p-3 text-xl font-bold">
                    <span className="me-5"> Sao : {item.level}</span>
                  </div>
                )}

                {item?.def && (
                  <div className="bg-blue-200 p-3 text-xl font-bold">
                    <span className="me-5">Atk: {item?.atk} </span>
                    <span>Def: {item?.def} </span>
                  </div>
                )}

                {/* <div className="bg-blue-200 p-3 text-xl font-bold">
                  {item.desc}
                </div> */}
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </>
  );
}
ListItems.propTypes = {
  dataAnime: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        images: PropTypes.arrayOf(
          PropTypes.shape({
            cardImage: PropTypes.number,
            image_url: PropTypes.string,
          }),
        ),
        atk: PropTypes.number,
        name: PropTypes.string,
        level: PropTypes.number,
        def: PropTypes.number,
      }),
    ),
  }).isRequired,
};
