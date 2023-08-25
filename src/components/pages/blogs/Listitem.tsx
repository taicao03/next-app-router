'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
// import type { Test } from '@/types/blogs';
import PropTypes from 'prop-types';
export default function ListItems({ dataAnime }) {
  return (
    <>
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
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
