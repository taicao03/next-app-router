'use server';

export async function getDetailDataTest() {
  const res = await fetch(`${process.env.TEST_ENDPOINT}people`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
