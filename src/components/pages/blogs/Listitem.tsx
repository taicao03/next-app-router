'use client';

import * as React from 'react';
import type { Test } from '@/types/blogs';
// import Link from 'next/link';

type ItemsProps = {
  initialItems: Test[];
};

export default function ListItems({ initialItems }: ItemsProps) {
  console.log(initialItems);
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
      {/* {initialItems.map((item) => (
        <Link className="border-none" key={item.id} href={`/items/${item.id}`}>
          <div className="overflow-hidden rounded-lg">
            <img
              className="h-full w-full object-cover object-center"
              src={item.imageUrl}
              alt="Portfolio project"
            />
            <div className="bg-blue-200 p-3 text-xl font-bold">
              {item.title}
            </div>
          </div>
        </Link>
      ))} */}
    </div>
  );
}
