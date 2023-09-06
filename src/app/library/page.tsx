import type { Metadata } from 'next';
import Children from '@/components/pages/library/index';

export const metadata: Metadata = {
  title: 'Library',
  description: 'Welcome to my portfolio page!',
};

const Library = async () => {
  return (
    <>
      <Children />
    </>
  );
};

export default Library;
