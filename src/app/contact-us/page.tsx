import type { Metadata } from 'next';
import Children from '@/components/pages/contact-us/index';

export const metadata: Metadata = {
  title: 'Contact Us',
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
