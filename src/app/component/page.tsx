import type { Metadata } from 'next';
import Children from '@/components/pages/component/index';

export const metadata: Metadata = {
  title: 'Component',
  description: 'Welcome to my portfolio page!',
};

const Components = async () => {
  return (
    <>
      <Children />
    </>
  );
};

export default Components;
