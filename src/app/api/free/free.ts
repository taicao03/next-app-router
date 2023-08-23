'use server';

export async function getDetailDataTest({
  page = 0,
  limit = 10,
}: {
  page?: number | undefined;
  limit?: number | undefined;
}) {
  const res = await fetch(
    `https://api.jikan.moe/v4/genres/anime?limit=${limit}&offset=${
      limit * page + 1
    }`,
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
