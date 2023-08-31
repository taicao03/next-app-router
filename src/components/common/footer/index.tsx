import Link from 'next/link';
import Button from '../ui/button';

const UiFollow = [
  {
    icon: '/images/svg/FooterFb.svg',
    herf: '',
  },
  {
    icon: '/images/svg/FooterINS.svg',
    herf: '',
  },
  {
    icon: '/images/svg/FooterTiktok.svg',
    herf: '',
  },
  {
    icon: '/images/svg/FooterYTB.svg',
    herf: '',
  },
];

export default function Foter() {
  return (
    <div className="bg-white lg:px-[122px] md:px-[72px] px-[18px] md:pt-[52px] border-t border-t-black">
      <div className="grid-rows-1 grid-flow-row-dense grid md:grid-cols-3 gap-4">
        <div className="col-span-2 border-b md:border-b-0 border-b-secondary pt-10 pb-8 md:py-0">
          <div className="relative mb-6">
            <img src="/images/svg/footer.png" className="md:h-40 h-24" alt="" />
            <div className="absolute md:top-20 top-12">
              <Button type="" text="Get in touch" />
            </div>
          </div>

          <div>
            <p className="mb-1">
              <span className="text-base text-black">For brands :</span>
              <Link className="text-base text-primary ms-1" href={'/'}>
                partners@melive.vn
              </Link>
            </p>
            <p>
              <span className="text-base text-black">For creators :</span>
              <Link className="text-base text-primary ms-1" href={'/'}>
                partners@melive.vn
              </Link>
            </p>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1 md:text-end">
          <div className="md:flex md:justify-end">
            <img src="/images/svg/logo.svg" className="mb-6" alt="" />
          </div>
          <p className="mb-1.5">
            <span className="text-base text-black">
              HQ: MELIVE Tower, 217/8 - 10 No Trang Long, Ward 12, Binh Thanh
              Dist., HMCM.
            </span>
            <Link className="text-base text-primary ms-1" href={'/'}>
              Google Map
            </Link>
          </p>
          <p className="md:mb-12 mb-8">
            <span className="text-base text-black">Hotline:</span>
            <Link className="text-base text-primary ms-1" href={'/'}>
              076.327.3768
            </Link>
            <span className="text-base text-primary">-</span>
            <Link className="text-base text-primary ms-1" href={'/'}>
              0919.325.279
            </Link>
          </p>
          <p className="text-nav text-black mb-4">FOLLOW US</p>

          <div className="flex md:justify-end">
            {UiFollow.map((item, index) => (
              <Link
                key={index}
                href={'/'}
                className={`${index === 3 ? '' : 'me-2'}`}
              >
                <img src={item?.icon} alt="" />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full border-t border-t-secondary flex h-auto justify-center items-center md:mt-8 mt-8 py-6">
        <p className="text-base_sm text-black">
          2022. METUB Vietnam JSC - All rights reserved
        </p>
      </div>
    </div>
  );
}
