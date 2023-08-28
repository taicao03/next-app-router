'use server';

import type { Test } from '@/types/blogs';
import { revalidateTag } from 'next/cache';

export const addBlog = async (e: FormData) => {
  const name = e.get('name')?.toString();
  const avatar = e.get('avatar')?.toString();
  const age = e.get('age')?.toString();
  const description = e.get('description')?.toString();
  if (!age || !name || !avatar || !description) return;

  const newBlog: Test = {
    name,
    avatar,
    age,
    description,
  };

  await fetch(`${process.env.MOCK_API}`, {
    method: 'POST',
    body: JSON.stringify(newBlog),
    headers: { 'Content-Type': 'application/json' },
  });

  revalidateTag('blogs');
};
