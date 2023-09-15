'use server';

import { notFound } from 'next/navigation';

export async function getCreator() {
  const data = {
    page: 1,
    limit: 100,
    fields: {
      ids: [],
      category_ids: [],
    },
  };

  const res = await fetch(`${process.env.CREATOR_ENDPOINT}`, {
    method: 'POST',
    next: { revalidate: 3600 },
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export async function getDetailCreator({ slug }) {
  const res = await fetch(`${process.env.BLOG_API}/${slug}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
}
