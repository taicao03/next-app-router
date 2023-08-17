'use client';

import * as React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import type { Pokemon } from '@/types/blogs';
import Link from 'next/link';

type ItemsProps = {
  initialItems: Pokemon[];
  initialTotal: number;
  fetchItems: ({ page }) => Promise<{
    results: Pokemon[];
    count: number;
  }>;
};

export default function ListItems({
  initialItems,
  initialTotal,
  fetchItems,
}: ItemsProps) {
  const fetching = React.useRef(false);
  const [pages, setPages] = React.useState([initialItems]);
  const [total, setTotal] = React.useState(initialTotal);
  const items = pages.flatMap((page) => page);

  const loadMore = async (page: number) => {
    if (!fetching.current && total > items.length) {
      try {
        fetching.current = true;
        const { results, count } = await fetchItems({ page });
        setTotal(count);
        setPages((prev) => [...prev, results]);
      } finally {
        fetching.current = false;
      }
    }
  };

  return (
    <InfiniteScroll
      hasMore
      pageStart={0}
      loadMore={loadMore}
      loader={
        <span key={0} className="loader">
          Loading ...
        </span>
      }
      element="main"
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {items.map((pokemon) => (
          <Link
            className="border-none"
            key={pokemon.name}
            href={`/pokemons/${pokemon.name}`}
          >
            <div className="overflow-hidden rounded-lg">
              <img
                className="h-full w-full object-cover object-center"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLeRyQWQjNTT-7Wei7wfE8y124moGbYgojMQ&usqp=CAU"
                alt="Portfolio project"
              />

              <div className="bg-blue-200 p-3 text-xl font-bold">
                {pokemon.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </InfiniteScroll>
  );
}
