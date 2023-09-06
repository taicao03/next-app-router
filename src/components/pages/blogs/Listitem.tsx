'use client';
import * as React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import Navbar from '@/components/common/nav';
import Brands from './brands';
import Creator from './creators';
import Career from './career';

// import { addBlog } from '@/app/actions/demoActions/index';

export default function ListItems() {
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
        <div className="lg:px-[112px] px-5">
          <Creator />
          <Brands />
          <Career />
        </div>

        {/* <form action={addBlog}>
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
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <Button type="submit" text="Thêm" classname="" />
            <Button type="button" text="Thêm" classname="" />
          </div>
        </form> */}

        {/* <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4">
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
              </div>
            </Link>
          ))}
        </div> */}
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
