import type { Metadata } from 'next';
// import Link from 'next/link';
// import Image from 'next/image';
// import { getDetailDataTest } from '@/app/api/free/free';
import ListItems from '@/components/pages/blogs/Listitem';
// import type { Test } from '@/types/blogs';
import { getPersonals } from '@/app/api/pokemon/pokemon';

export const metadata: Metadata = {
  title: 'Blogs',
  description: 'Welcome to my portfolio page!',
};

const Portfolio = async () => {
  const dataAnime = await getPersonals();
  return <>{<ListItems dataAnime={dataAnime} />}</>;
};

export default Portfolio;
