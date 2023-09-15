import type { Metadata } from 'next';
import Children from '@/components/pages/brands/index';
import { getBrands } from '@/app/api/BRANDS/brands';
export const metadata: Metadata = {
  title: 'For Brands',
  description: 'Welcome to my portfolio page!',
};

const Brands = async () => {
  const data = await getBrands();
  return (
    <>
      <Children data={data} />
    </>
  );
};

export default Brands;
