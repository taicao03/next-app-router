import type { Metadata } from 'next';
import Children from '@/components/pages/creator/index';

import { getTest } from '@/app/api/free/free';

export const metadata: Metadata = {
  title: 'Component',
  description: 'Welcome to my portfolio page!',
};

const Components = async () => {
  const data = await getTest();

  return (
    <>
      <Children data={data} />
    </>
  );
};

export default Components;
