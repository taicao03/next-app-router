import type { Metadata } from 'next';
import Children from '@/components/pages/library/index';

import { getTest } from '@/app/api/free/free';

export const metadata: Metadata = {
  title: 'Library',
  description: 'Welcome to my portfolio page!',
};

const Library = async () => {
  const data = await getTest();

  return (
    <>
      <Children dataAll={data} />
    </>
  );
};

export default Library;
