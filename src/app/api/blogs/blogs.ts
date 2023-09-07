'use server';

export async function getBlogs() {
  const res = await fetch(`${process.env.BLOG_API}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export async function getDetailBlogs({ slug }) {
  const res = await fetch(`${process.env.BLOG_API}/${slug}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
