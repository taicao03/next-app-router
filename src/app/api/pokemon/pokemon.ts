'use server';

export async function getData({
  page = 0,
  limit = 10,
}: {
  page?: number | undefined;
  limit?: number | undefined;
}) {
  console.log(process.env.POKEMON_ENDPOINT);

  const res = await fetch(
    `${process.env.POKEMON_ENDPOINT}pokemon?limit=${limit}&offset=${
      limit * page + 1
    }`,
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export async function getDetailData({ slug }) {
  const res = await fetch(`${process.env.POKEMON_ENDPOINT}pokemon/${slug}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
