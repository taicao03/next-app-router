import type { Metadata } from 'next';

type BlogProps = {
  params: { slug: string };
};

export function generateMetadata(props: BlogProps): Metadata {
  return {
    title: `${props.params.slug}`,
  };
}
import ListItems from '@/components/pages/blogs/detail/index';

import { getDetailBlogs } from '@/app/api/blogs/blogs';

export default async function BlogsDetail({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getDetailBlogs({ slug: params.slug });
  return <>{<ListItems dataDetailBlogs={data} />}</>;
}
