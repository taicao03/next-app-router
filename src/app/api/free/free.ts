'use server';

export async function getDetailDataTest() {
  const res = await fetch(`${process.env.YUKIOH_API}?archetype=Blue-Eyes`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
