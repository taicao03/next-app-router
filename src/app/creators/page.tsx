import type { Metadata } from 'next';
import Children from '@/components/pages/creator/index';

import { getCreator } from '@/app/api/CREATOR/creator';

export const metadata: Metadata = {
  title: 'Component',
  description: 'Welcome to my portfolio page!',
};

const Components = async () => {
  const data = await getCreator();
  console.log(data);

  return (
    <>
      <Children data={data} />
    </>
  );
};

export default Components;
