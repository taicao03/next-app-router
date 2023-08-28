'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { addBlog } from '@/app/actions/demoActions/index';
import Input from '@/components/common/ui/input';
import Button from '@/components/common/ui/button';
import Images from '@/components/common/ui/images';

export default function ListItems({ dataAnime }) {
  return (
    <>
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
              />

              <Input
                label="Tên của bạn"
                parentClass="sm:col-span-3"
                name="name"
                placeholder=""
                value=""
              />

              <Input
                label="Tuổi của bạn"
                parentClass="sm:col-span-3"
                name="age"
                placeholder=""
                value=""
              />

              <Input
                label="Mô tả của bạn"
                parentClass="sm:col-span-3"
                name="description"
                placeholder=""
                value=""
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <Button type="submit" text="Thêm" />
        </div>
      </form>

      <div className="">
        <Images alt="2131" className="" src="img-test.jpg" />
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {dataAnime.map((item) => (
          <Link
            className="border-none"
            key={item.id}
            href={`/blogs/${item.id}`}
          >
            <div className="overflow-hidden rounded-lg">
              <div className="image-container">
                <motion.img
                  src={item.avatar}
                  alt="Portfolio project"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                />
              </div>
              <div className="bg-blue-200 p-3 text-xl font-bold">
                {item.name}
              </div>
              <div className="bg-blue-200 p-3 text-xl font-bold">
                {item.age}
              </div>
              <div className="bg-blue-200 p-3 text-xl font-bold">
                {item.description}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

ListItems.propTypes = {
  dataAnime: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      age: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
