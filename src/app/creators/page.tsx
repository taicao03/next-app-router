import type { Metadata } from 'next';
import Children from '@/components/pages/creator/index';

import { getCreator } from '@/app/api/CREATOR/creator';

export const metadata: Metadata = {
  title: 'For Creator | METUB NET',
  description: 'Welcome to my portfolio page!',
};

const Components = async () => {
  const data = await getCreator();

  return (
    <>
      <Children data={data} />
    </>
  );
};

export default Components;
