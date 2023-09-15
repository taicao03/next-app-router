'use server';

export async function getBrands() {
  const res = await fetch(`${process.env.BRAND_API}`, {
    method: 'POST',
    next: { revalidate: 3600 },
    headers: { 'Content-Type': 'application/json' },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
