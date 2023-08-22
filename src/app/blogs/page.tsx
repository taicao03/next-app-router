import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Welcome to my portfolio page!',
};

const DATA = [
  { name: 'chocopie', age: 30, des: 'ăn theo cách của bạn' },
  { name: 'Sizuka', age: 20, des: 'CON NGƯỜI TÔI YÊU LÀ 1 CON NGƯỜI' },
];

const Portfolio = () => (
  <>
    <p>Chào mừng bạn đến với vuông quốc HADICAP</p>

    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
      {DATA.map((person, index) => (
        <Link
          className="border-none"
          key={index}
          href={`/blogs/${person?.name}`}
        >
          <div className="overflow-hidden rounded-lg">
            <img
              className="h-full w-full object-cover object-center"
              src="/assets/images/nextjs-starter-banner.png"
              alt="Portfolio project"
            />

            <div className="bg-blue-200 p-3 text-xl font-bold">
              {person?.name}
            </div>
          </div>
        </Link>
      ))}
    </div>
  </>
);

export default Portfolio;
