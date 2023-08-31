import type { Metadata } from 'next';
import ListItems from '@/components/pages/blogs/Listitem';
// import { getPersonals } from '@/app/api/pokemon/pokemon';
import { getDetailDataTest } from '@/app/api/free/free';
export const metadata: Metadata = {
  title: 'Blogs',
  description: 'Welcome to my portfolio page!',
};

const Portfolio = async () => {
  const dataAnime = await getDetailDataTest();

  return <>{<ListItems dataAnime={dataAnime} />}</>;
};

export default Portfolio;
