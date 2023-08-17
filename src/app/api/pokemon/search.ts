// import type { NextApiRequest, NextApiResponse } from 'next';

// import filterPokemons from '@/utils/filterPokemons';
// import pokemonData from 'pokemon.json';

// export default (req: NextApiRequest, res: NextApiResponse): void => {
//   const filterQueryName = req.query.name
//     ? new RegExp(req.query.name as string, 'i')
//     : /.*/;

//   const filteredPokemons = filterPokemons(pokemonData, filterQueryName);

//   res.setHeader('Content-Type', 'application/json');

//   return res.status(200).send(JSON.stringify(filteredPokemons));
// };

export default async function getData() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
