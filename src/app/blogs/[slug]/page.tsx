import type { Metadata } from 'next';

type BlogProps = {
  params: { slug: string };
};

const DATA = [
  { name: 'chocopie', age: 30, des: 'ăn theo cách của bạn' },
  { name: 'Sizuka', age: 20, des: 'CON NGƯỜI TÔI YÊU LÀ 1 CON NGƯỜI' },
];

export async function generateStaticParams() {
  return DATA.map((person) => ({
    slug: `${person?.name}`,
  }));
}

export function generateMetadata(props: BlogProps): Metadata {
  return {
    title: `Blog ${props.params.slug}`,
  };
}

const PortfolioDetail = (props: BlogProps) => {
  return (
    <>
      <h1 className="capitalize">Blog {props.params.slug}</h1>
      <p>
        Created a set of promotional materials and branding elements for a
        corporate event. Crafted a visually unified theme, encompassing a logo,
        posters, banners, and digital assets. Integrated the client&apos;s brand
        identity while infusing it with a contemporary and innovative approach.
        Garnered favorable responses from event attendees, resulting in a
        successful event with heightened participant engagement and increased
        brand visibility. con chó để
      </p>
    </>
  );
};

export const dynamicParams = false;

export default PortfolioDetail;
