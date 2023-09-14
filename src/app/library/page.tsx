import type { Metadata } from 'next';
import Children from '@/components/pages/library/index';

import { getCreator } from '@/app/api/CREATOR/creator';
export const metadata: Metadata = {
  title: 'Library',
  description: 'Welcome to my portfolio page!',
};

const Library = async () => {
  const data = await getCreator();

  return (
    <>
      <Children dataAll={data} />
    </>
  );
};

export default Library;
