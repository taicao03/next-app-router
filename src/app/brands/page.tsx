import type { Metadata } from 'next';
import Children from '@/components/pages/brands/index';

export const metadata: Metadata = {
  title: 'For Brands',
  description: 'Welcome to my portfolio page!',
};

const Brands = async () => {
  return (
    <>
      <Children />
    </>
  );
};

export default Brands;
