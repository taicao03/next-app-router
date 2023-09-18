import type { Metadata } from 'next';
import Children from '@/components/pages/home/main-home';
import { getCreator } from '@/app/api/CREATOR/creator';
export const metadata: Metadata = {
  title: 'MELIVE NET',
  description: 'Welcome to my portfolio page!',
};

const PageHome = async () => {
  const data = await getCreator();

  return (
    <>
      <Children data={data} />
    </>
  );
};

export default PageHome;
