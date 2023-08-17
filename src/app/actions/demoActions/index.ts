'use server';

import type { Blog } from '@/types/blogs';
import { revalidateTag } from 'next/cache';

export const addBlog = async (e: FormData) => {
  const title = e.get('title')?.toString();
  const content = e.get('content')?.toString();

  if (!title || !content) return;

  const newBlog: Blog = {
    title,
    content,
  };

  await fetch('', {
    method: 'POST',
    body: JSON.stringify(newBlog),
    headers: { 'Content-Type': 'application/json' },
  });

  revalidateTag('blogs');
};
