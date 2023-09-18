'use server';

import type { FomatField } from '@/types/blogs';
import { revalidateTag } from 'next/cache';
export const fieldslibrary = async () => {
  const page = 1;
  const limit = 100;

  // const avatar = e.get('avatar')?.toString();
  if (!page || !limit) return;

  const newBlog: FomatField = {
    page,
    limit,
  };

  await fetch(`${process.env.CREATOR_ENDPOINT}`, {
    method: 'POST',
    body: JSON.stringify(newBlog),
    headers: { 'Content-Type': 'application/json' },
  });

  revalidateTag('library');
};
