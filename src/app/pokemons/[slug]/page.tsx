import type { Metadata } from 'next';

type BlogProps = {
  params: { slug: string };
};

// export async function generateStaticParams() {
//   return Array.from(Array(6).keys()).map((elt) => ({
//     slug: `${elt}`,
//   }));
// }

export function generateMetadata(props: BlogProps): Metadata {
  return {
    title: `Blog ${props.params.slug}`,
  };
}

import { getDetailData } from '@/app/api/pokemon/pokemon';

export default async function PokemonDetail({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getDetailData({ slug: params.slug });
  return (
    <div className="sm:container md:mx-auto">
      <div className="flex justify-center	">
        <div className="w-1/4 rounded-lg">
          <img
            className="h-full w-full object-cover object-center"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLeRyQWQjNTT-7Wei7wfE8y124moGbYgojMQ&usqp=CAU"
            alt="Portfolio project"
          />

          <div className="bg-blue-200 p-3 text-xl font-bold">{data.name}</div>
        </div>
      </div>
    </div>
  );
}
