'use server';

import type { FomatField } from '@/types/blogs';
import { revalidateTag } from 'next/cache';
import type { NextApiRequest, NextApiResponse } from 'next';
export const fieldslibrary = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  const page = 1;
  const limit = 100;

  console.log(res);
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
