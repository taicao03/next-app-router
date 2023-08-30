import Link from 'next/link';

export default function Foter() {
  return (
    <div className="bg-white md:px-[122px] px-[18px] md:pt-[52px] border-t border-t-black">
      <div className=" grid-rows-1 grid-flow-row-dense grid md:grid-cols-3 gap-4">
        <div className="col-span-2">
          <p className="text-black">
            HQ: MELIVE Tower, 217/8 - 10 No Trang Long, Ward 12, Binh Thanh
            Dist., HMCM. HQ: MELIVE Tower, 217/8 - 10 No Trang Long, Ward 12,
            Binh Thanh Dist., HMCM. HQ: MELIVE Tower, 217/8 - 10 No Trang Long,
            Ward 12, Binh Thanh Dist., HMCM. HQ: MELIVE Tower, 217/8 - 10 No
            Trang Long, Ward 12, Binh Thanh Dist., HMCM.
          </p>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <img src="/images/svg/logo.svg" className="mb-6" alt="" />
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
          <p className="text-nav text-black">FOLLOW US</p>
        </div>
      </div>
      <div className="w-full border-t border-t-secondary flex h-auto justify-center items-center md:mt-16 mt-8 py-6">
        <p className="text-base_sm text-black">
          2022. METUB Vietnam JSC - All rights reserved
        </p>
      </div>
    </div>
  );
}
