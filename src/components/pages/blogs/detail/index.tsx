'use client';
import * as React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import Navbar from '@/components/common/nav';

export default function ListItems({ dataDetailBlogs }) {
  console.log(dataDetailBlogs);
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
      ></motion.div>
    </>
  );
}

ListItems.propTypes = {
  dataDetailBlogs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      avatar: PropTypes.string,
    }),
  ),
};
