'use server';

export async function getData({
  page = 0,
  limit = 10,
}: {
  page?: number | undefined;
  limit?: number | undefined;
}) {
  const res = await fetch(
    `${process.env.POKEMON_ENDPOINT}pokemon?limit=${limit}&offset=${
      limit * page + 1
    }`,
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export async function getDetailData({ slug }) {
  const res = await fetch(`${process.env.POKEMON_ENDPOINT}pokemon/${slug}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
