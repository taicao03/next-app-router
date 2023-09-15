'use server';

import { notFound } from 'next/navigation';
export async function getBlogs() {
  const res = await fetch(`${process.env.BLOG_API}`, {
    method: 'POST',
    next: { revalidate: 3600 },
    headers: { 'Content-Type': 'application/json' },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export async function getBlogsCareer() {
  const data = {
    page: 1,
    limit: 3,
    fields: {
      ids: [],
      category_ids: ['03a8ce59-7a09-4645-b3c6-451550c0631f'],
    },
  };

  const res = await fetch(`${process.env.BLOG_API}`, {
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

export async function getBlogsBrands() {
  const data = {
    page: 1,
    limit: 3,
    fields: {
      ids: [],
      category_ids: ['1984fb1c-8771-4269-8cbd-7cfb1ef6ef5f'],
    },
  };

  const res = await fetch(`${process.env.BLOG_API}`, {
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
export async function getBlogsCreator() {
  const data = {
    page: 1,
    limit: 3,
    fields: {
      ids: [],
      category_ids: ['78820b37-36c0-4e3e-8938-0311a52cc2ce'],
    },
  };

  const res = await fetch(`${process.env.BLOG_API}`, {
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

export async function getDetailBlogs({ slug }) {
  const res = await fetch(`${process.env.BLOG_API}/${slug}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
}
