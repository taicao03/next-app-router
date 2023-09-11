import type { Metadata } from 'next';
import Children from '@/components/pages/home/main-home';
import { getTest } from '@/app/api/free/free';

export const metadata: Metadata = {
  title: 'Library',
  description: 'Welcome to my portfolio page!',
};

const PageHome = async () => {
  const data = await getTest();

  return (
    <>
      <Children data={data} />
    </>
  );
};

export default PageHome;
