import type { Metadata } from 'next';
import { getData } from '@/app/api/pokemon/pokemon';

import ListItems from '@/components/pages/pokemons/ListItem';

export const metadata: Metadata = {
  title: 'Pokemon',
  description: 'Welcome to my portfolio page!',
};

const Portfolio = async () => {
  const { results, count } = await getData({ page: 0 });
  return (
    <>
      <ListItems
        initialItems={results}
        initialTotal={count}
        fetchItems={getData}
      />
    </>
  );
};

export default Portfolio;
