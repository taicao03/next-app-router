import type { Metadata } from 'next';
import ListItems from '@/components/pages/blogs/Listitem';
import { getBlogs } from '@/app/api/blogs/blogs';
export const metadata: Metadata = {
  title: 'Blogs',
  description: 'Welcome to my portfolio page!',
};

const Portfolio = async () => {
  const data = await getBlogs();
  return <>{<ListItems dataBlogs={data} />}</>;
};

export default Portfolio;
