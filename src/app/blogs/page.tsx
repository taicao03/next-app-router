import { montserrat } from '@/app/fonts';
import type { Metadata } from 'next';
import ListItems from '@/components/pages/blogs/Listitem';
import {
  getBlogsCareer,
  getBlogsBrands,
  getBlogsCreator,
} from '@/app/api/blogs/blogs';
export const metadata: Metadata = {
  title: 'Blogs',
  description: 'Welcome to my portfolio page!',
};

const Portfolio = async () => {
  const dataCreator = await getBlogsCreator();
  const dataCreer = await getBlogsCareer();
  const dataBrands = await getBlogsBrands();

  return (
    <div className={montserrat.className}>
      {
        <ListItems
          dataCreator={dataCreator}
          dataCreer={dataCreer}
          dataBrands={dataBrands}
        />
      }
    </div>
  );
};

export default Portfolio;
