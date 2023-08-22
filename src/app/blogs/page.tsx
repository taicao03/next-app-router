import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

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
    <div className="">
      <video controls={false} width="100%" autoPlay muted height="200" loop>
        <source
          src="https://metub.net/template/images/metub_video.mp4"
          type="video/mp4"
        />
      </video>

      <div className="grid grid-rows-3 grid-flow-col gap-4 ">
        <div className="row-start-2 row-span-2 ...">01</div>
        <div className="row-end-3 row-span-2 ...">02</div>
        <div className="row-start-1 row-end-4 ...">03</div>
      </div>
    </div>
    <div className="md:grid md:grid-flow-row-dense md:grid-cols-3 md:grid-rows-3 hover:lg:bg-red-800">
      <div className="col-span-2 bg-pink-500 sm:bg-red-600  lg:bg-green-600">
        01
      </div>
      <div className="col-span-2">03</div>
      <div>02</div>
      <div>04</div>
    </div>

    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
      {DATA.map((person, index) => (
        <Link
          className="border-none"
          key={index}
          href={`/blogs/${person?.name}`}
        >
          <div className="overflow-hidden rounded-lg">
            <Image
              className="h-full w-full object-cover object-center"
              src="/images/img-test.jpg"
              width={500}
              height={500}
              alt="Picture of the author"
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
