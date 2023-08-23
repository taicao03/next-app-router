'use server';

export async function getDetailDataTest() {
  // const res = await fetch(`${process.env.TEST_ENDPOINT}people`);

  await fetch(`${process.env.TEST_ENDPOINT}people`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      console.log('Event sent', response);
    })
    .catch((error) => {
      console.log('Fetching error: ', error);
    });

  // console.log('🚀 ~ file: free.ts:8 ~ res ~ res:', res);

  // if (!res.ok) {
  //   throw new Error('Failed to fetch data');
  // }

  // return res.json();
  return [];
}
