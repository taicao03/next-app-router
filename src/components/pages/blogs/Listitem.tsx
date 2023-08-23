// 'use client';

import * as React from 'react';
import type { Test } from '@/types/blogs';
import Link from 'next/link';

export default async function ListItems() {
  const res = await fetch('https://64e5cefb09e64530d17f1104.mockapi.io/anime', {
    cache: 'no-cache',
  });

  const dataAnime: Test[] = await res.json();

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
      {dataAnime.map((item) => (
        <Link className="border-none" key={item.id} href={`/blogs/${item.id}`}>
          <div className="overflow-hidden rounded-lg">
            <img
              className="h-full w-full object-cover object-center"
              src={item.avatar}
              alt="Portfolio project"
            />
            <div className="bg-blue-200 p-3 text-xl font-bold">{item.name}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
