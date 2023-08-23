import type { Metadata } from 'next';
// import Link from 'next/link';
// import Image from 'next/image';
import { getDetailDataTest } from '@/app/api/free/free';
import ListItems from '@/components/pages/blogs/Listitem';

export const metadata: Metadata = {
  title: 'Blogs',
  description: 'Welcome to my portfolio page!',
};

const Portfolio = async () => {
  const { results, count } = await getDetailDataTest({ page: 0 });
  return (
    <>
      <ListItems
        initialItems={results}
        initialTotal={count}
        fetchItems={getDetailDataTest}
      />
    </>
  );
};

export default Portfolio;
