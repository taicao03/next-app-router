import type { Metadata } from 'next';
import Children from '@/components/pages/brands/index';
import { getTest } from '@/app/api/free/free';

export const metadata: Metadata = {
  title: 'For Brands',
  description: 'Welcome to my portfolio page!',
};

const Brands = async () => {
  const data = await getTest();

  return (
    <>
      <Children data={data} />
    </>
  );
};

export default Brands;
