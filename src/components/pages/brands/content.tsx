'use client';
import Button from '@/components/common/ui/button';

const UiBrandsContent = () => {
  const creatorConnect = [
    {
      title: 'Content Direction',
      icon: '',
      text: 'Help brands creating TikTok channel, convey your messages and sell goods via video content',
    },
    {
      title: 'Channel Optimization',
      icon: '',
      text: "As TikTok Shop specialist, meLive takes care & optimize creator's channel.",
    },
    {
      title: 'Livestream Optimization',
      icon: '',
      text: 'Consulting,  training and optimizing the efficiency of livestream optimization.',
    },
    {
      title: 'Creator Collaboration',
      icon: '',
      text: 'meLive has a wide network of creators who will always achieve the goals you are aiming for.',
    },
  ];

  return (
    <>
      <div className="lg:mx-[112px] lg:my-[120px] mt-0 mx-5">
        <p className="md:text-title_56_64_700 text-title_32_44_700 text-black uppercase">
          Discover our <br />
          <span className="split-text">
            creator
            <br className="md:hidden" />
            connect
          </span>
          <br className="lg:hidden" />
          <span className="">compass</span>
        </p>
        <div className="my-20 md:flex ">
          {creatorConnect.map((item, index) => (
            <div
              className={`group md:w-3/12 cursor-pointer hover md:mb-0 mb-3 px-5 md:py-4 py-6  text-black rounded-3 border-primary border hover:bg-primary hover:text-white slide-top-hover ${
                index === 3 ? 'md:me-0' : 'lg:me-8 md:me-4'
              }`}
              key={index}
            >
              <h2 className="text-title_20_32_600 mb-1">{item?.title}</h2>
              <p className="text-gray text-base group-hover:text-white">
                {item?.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="md:flex bg-black lg:px-[120px] px-5">
        <div className="md:w-6/12">
          <p className="md:text-title_56_64_700 text-title_32_44_700 text-white uppercase mb-9">
            <span className="split-text">Level up</span>
            <br />
            your brand
          </p>
          <Button
            text={`Join now >>`}
            type={``}
            classname={`bg-white text-primary px-6 py-4`}
          />
        </div>
        <div className="md:w-6/12">
          <p className="text-title_md split-text md:mb-9 mb-8">
            Grow Extra With
          </p>
          <div className="flex items-center md:mb-8 mb-6">
            <div className="bg-primary p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <g clipPath="url(#clip0_252_21741)">
                  <path
                    d="M14.16 7.13777C13.5151 7.78126 12.4699 7.78126 11.8251 7.13777C11.1804 6.49427 11.1804 5.45088 11.8251 4.80739C12.4699 4.1639 13.5151 4.1639 14.16 4.80739C14.8047 5.45088 14.8047 6.49427 14.16 7.13777Z"
                    fill="white"
                  />
                  <path
                    d="M16.4154 9.63452C16.2143 9.63452 16.0131 9.55776 15.86 9.40403C15.5537 9.09736 15.5543 8.60045 15.861 8.29438C16.4824 7.6741 16.8246 6.8495 16.8246 5.97253C16.8246 5.09556 16.4824 4.27097 15.861 3.65068C15.5543 3.34441 15.5537 2.84771 15.86 2.54084C16.166 2.23417 16.663 2.23357 16.9696 2.53984C17.8882 3.45668 18.3941 4.67563 18.3941 5.97253C18.3941 7.26923 17.8882 8.48838 16.9696 9.40522C16.8165 9.55815 16.6159 9.63452 16.4154 9.63452Z"
                    fill="white"
                  />
                  <path
                    d="M18.1904 11.9449C17.9892 11.9449 17.7881 11.8681 17.6349 11.7146C17.3287 11.4077 17.3293 10.911 17.6359 10.6048C18.8757 9.36737 19.5587 7.72234 19.5587 5.97257C19.5587 4.2228 18.8757 2.57777 17.6359 1.34038C17.3293 1.03411 17.3287 0.537402 17.6349 0.230533C17.9412 -0.076137 18.4379 -0.0767321 18.7446 0.229542C20.2815 1.76349 21.1281 3.80307 21.1279 5.97257C21.1279 8.14208 20.2815 10.1819 18.7446 11.7158C18.5914 11.8685 18.3909 11.9449 18.1904 11.9449Z"
                    fill="white"
                  />
                  <path
                    d="M9.56573 9.63454C9.36518 9.63454 9.16464 9.55817 9.0113 9.40523C8.09268 8.48839 7.58685 7.26925 7.58685 5.97254C7.58685 4.67564 8.09268 3.4567 9.0113 2.53986C9.31797 2.23358 9.81488 2.23398 10.121 2.54085C10.4272 2.84752 10.4266 3.34442 10.12 3.6507C9.49849 4.27098 9.15631 5.09558 9.15631 5.97254C9.15631 6.84951 9.49849 7.67411 10.12 8.29439C10.4266 8.60047 10.4272 9.09737 10.121 9.40404C9.96781 9.55757 9.76667 9.63454 9.56573 9.63454Z"
                    fill="white"
                  />
                  <path
                    d="M7.79073 11.9449C7.58999 11.9449 7.38944 11.8685 7.23631 11.7156C5.69938 10.1816 4.85297 8.14205 4.85297 5.97255C4.85297 3.80284 5.69938 1.76327 7.23631 0.22932C7.54298 -0.076755 8.03988 -0.0763582 8.34596 0.230511C8.65223 0.537181 8.65163 1.03388 8.34496 1.34016C7.10519 2.57755 6.42222 4.22258 6.42222 5.97235C6.42222 7.72212 7.10519 9.36735 8.34496 10.6047C8.65163 10.911 8.65223 11.4077 8.34596 11.7146C8.19282 11.8681 7.99168 11.9449 7.79073 11.9449Z"
                    fill="white"
                  />
                  <path
                    d="M23.3329 13.3015H2.64816C1.63432 13.3015 0.8125 14.1233 0.8125 15.137V24.1643C0.8125 25.1782 1.63432 26 2.64816 26H23.3327C24.3466 26 25.1684 25.1782 25.1684 24.1643V15.137C25.1684 14.1233 24.3466 13.3015 23.3329 13.3015ZM6.84891 23.6448H3.95776C3.52453 23.6448 3.17323 23.2935 3.17323 22.8601V16.4414C3.17323 16.0082 3.52453 15.6567 3.95776 15.6567C4.39118 15.6567 4.74248 16.008 4.74248 16.4414V22.0753H6.84891C7.28233 22.0753 7.63364 22.4266 7.63364 22.8601C7.63364 23.2935 7.28233 23.6448 6.84891 23.6448ZM10.0648 22.8601C10.0648 23.2935 9.71348 23.6448 9.28006 23.6448C8.84663 23.6448 8.49533 23.2935 8.49533 22.8601V16.4414C8.49533 16.0082 8.84663 15.6567 9.28006 15.6567C9.71348 15.6567 10.0648 16.008 10.0648 16.4414V22.8601ZM16.6671 16.6683L14.7293 23.0868C14.7291 23.0874 14.7289 23.088 14.7287 23.0886C14.5182 23.8069 13.4453 23.7892 13.2275 23.0886C13.2273 23.088 13.2271 23.0874 13.2269 23.0868L11.2891 16.6683C11.1639 16.2534 11.3986 15.8156 11.8136 15.6902C12.2281 15.565 12.6663 15.7997 12.7915 16.2147L13.9781 20.1449L15.1647 16.2147C15.2901 15.7997 15.7279 15.5648 16.1428 15.6902C16.5576 15.8156 16.7925 16.2534 16.6671 16.6683ZM21.4947 18.4619C21.9281 18.4619 22.2794 18.8133 22.2794 19.2467C22.2794 19.6799 21.9281 20.0314 21.4947 20.0314H19.2679V22.0753H21.9174C22.3508 22.0753 22.7021 22.4266 22.7021 22.8601C22.7021 23.2935 22.3508 23.6448 21.9174 23.6448H18.4831C18.0497 23.6448 17.6984 23.2935 17.6984 22.8601V16.4414C17.6984 16.0082 18.0497 15.6567 18.4831 15.6567H22.0231C22.4564 15.6567 22.8079 16.008 22.8079 16.4414C22.8079 16.8748 22.4564 17.2261 22.0231 17.2261H19.2677V18.4619H21.4947Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_252_21741">
                    <rect width="26" height="26" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="lg:text-title_20_32_600 text-text_sm ms-5">
              Livestream production package
            </p>
          </div>

          <div className="flex items-center md:mb-8 mb-6">
            <div className="bg-primary p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <g clipPath="url(#clip0_146_13232)">
                  <path
                    d="M7.0625 31.0625C7.0625 31.58 7.4825 32 8 32H13C13.5175 32 13.9375 31.58 13.9375 31.0625V30.3125H7.0625V31.0625Z"
                    fill="white"
                  />
                  <path
                    d="M18.0625 31.0625C18.0625 31.58 18.4825 32 19 32H24C24.5175 32 24.9375 31.58 24.9375 31.0625V30.3125H18.0625V31.0625Z"
                    fill="white"
                  />
                  <path
                    d="M14.7844 15.1123L14.3013 16.5614L15.4553 15.7372C15.7812 15.5044 16.2192 15.5044 16.5452 15.7372L17.6992 16.5614L17.2161 15.1123C17.0919 14.7396 17.2132 14.3291 17.5199 14.0837L18.3275 13.4375H17.3335C16.93 13.4375 16.5717 13.1793 16.4441 12.7964L16.0002 11.4647L15.5562 12.7965C15.4286 13.1793 15.0704 13.4376 14.6669 13.4376H13.6729L14.4806 14.0838C14.7873 14.3291 14.9085 14.7396 14.7844 15.1123Z"
                    fill="white"
                  />
                  <path
                    d="M29.1875 3.5625H27.4375V1.875H28C28.5177 1.875 28.9375 1.45525 28.9375 0.9375C28.9375 0.41975 28.5177 0 28 0H25C24.4823 0 24.0625 0.41975 24.0625 0.9375C24.0625 1.45525 24.4823 1.875 25 1.875H25.5625V3.5625H20.4375V1.875H21C21.5177 1.875 21.9375 1.45525 21.9375 0.9375C21.9375 0.41975 21.5177 0 21 0H18C17.4823 0 17.0625 0.41975 17.0625 0.9375C17.0625 1.45525 17.4823 1.875 18 1.875H18.5625V3.5625H13.4375V1.875H14C14.5177 1.875 14.9375 1.45525 14.9375 0.9375C14.9375 0.41975 14.5177 0 14 0H11C10.4823 0 10.0625 0.41975 10.0625 0.9375C10.0625 1.45525 10.4823 1.875 11 1.875H11.5625V3.5625H6.4375V1.875H7C7.51775 1.875 7.9375 1.45525 7.9375 0.9375C7.9375 0.41975 7.51775 0 7 0H4C3.48225 0 3.0625 0.41975 3.0625 0.9375C3.0625 1.45525 3.48225 1.875 4 1.875H4.5625V3.5625H2.8125C1.26169 3.5625 0 4.82419 0 6.375V22.125C0 23.6758 1.26169 24.9375 2.8125 24.9375H3.0625V26.5625H2.5C1.98225 26.5625 1.5625 26.9823 1.5625 27.5C1.5625 28.0177 1.98225 28.4375 2.5 28.4375H29.5C30.0177 28.4375 30.4375 28.0177 30.4375 27.5C30.4375 26.9823 30.0177 26.5625 29.5 26.5625H28.9375V24.9375H29.1875C30.7383 24.9375 32 23.6758 32 22.125V6.375C32 4.82419 30.7383 3.5625 29.1875 3.5625ZM24.5 8.0625H25.0625V7.5C25.0625 6.98225 25.4823 6.5625 26 6.5625C26.5177 6.5625 26.9375 6.98225 26.9375 7.5V8.0625H27.5C28.0177 8.0625 28.4375 8.48225 28.4375 9C28.4375 9.51775 28.0177 9.9375 27.5 9.9375H26.9375V10.5C26.9375 11.0177 26.5177 11.4375 26 11.4375C25.4823 11.4375 25.0625 11.0177 25.0625 10.5V9.9375H24.5C23.9823 9.9375 23.5625 9.51775 23.5625 9C23.5625 8.48225 23.9823 8.0625 24.5 8.0625ZM10.1154 12.1897C10.2471 11.814 10.6019 11.5625 11 11.5625H13.9909L15.1106 8.20356C15.2382 7.82075 15.5965 7.5625 16 7.5625C16.4035 7.5625 16.7618 7.82075 16.8894 8.20356L18.0091 11.5625H21C21.3981 11.5625 21.7529 11.814 21.8846 12.1897C22.0164 12.5654 21.8965 12.9834 21.5856 13.2321L19.2014 15.1395L20.3894 18.7036C20.5179 19.0888 20.3836 19.5129 20.057 19.7541C19.7321 19.9941 19.2873 20.0001 18.9551 19.7629L16 17.6521L13.0449 19.7629C12.7146 19.9989 12.2698 19.9954 11.9431 19.7541C11.6164 19.5129 11.4822 19.0887 11.6106 18.7036L12.7987 15.1395L10.4144 13.2321C10.1034 12.9834 9.98356 12.5654 10.1154 12.1897ZM4.5 17.5625H5.0625V17C5.0625 16.4823 5.48225 16.0625 6 16.0625C6.51775 16.0625 6.9375 16.4823 6.9375 17V17.5625H7.5C8.01775 17.5625 8.4375 17.9823 8.4375 18.5C8.4375 19.0177 8.01775 19.4375 7.5 19.4375H6.9375V20C6.9375 20.5177 6.51775 20.9375 6 20.9375C5.48225 20.9375 5.0625 20.5177 5.0625 20V19.4375H4.5C3.98225 19.4375 3.5625 19.0177 3.5625 18.5C3.5625 17.9823 3.98225 17.5625 4.5 17.5625ZM27.0625 26.5625H4.9375V24.9375H27.0625V26.5625Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_146_13232">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="lg:text-title_20_32_600 text-text_sm ms-5">
              Livestream production package
            </p>
          </div>

          <div className="flex items-center md:mb-8 mb-6">
            <div className="bg-primary p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M24.5661 8.12819V2.30338H18.3667L24.5661 8.12819Z"
                  fill="white"
                />
                <path
                  d="M8.86328 9.35794H23.1372L16.0002 2.65225L8.86328 9.35794Z"
                  fill="white"
                />
                <path
                  d="M24.0709 11.2329H7.9292L16.0001 29.6966L24.0709 11.2329Z"
                  fill="white"
                />
                <path
                  d="M7.43359 8.12819L13.633 2.30338H7.43359V8.12819Z"
                  fill="white"
                />
                <path
                  d="M5.55863 9.35792V3.71542L0.203125 9.35792H5.55863Z"
                  fill="white"
                />
                <path
                  d="M26.4414 9.35792H31.7969L26.4414 3.71542V9.35792Z"
                  fill="white"
                />
                <path
                  d="M26.1173 11.2329L19.5347 26.2919L32.0001 11.2329H26.1173Z"
                  fill="white"
                />
                <path
                  d="M5.88281 11.2329H0L12.4654 26.2919L5.88281 11.2329Z"
                  fill="white"
                />
              </svg>
            </div>
            <p className="lg:text-title_20_32_600 text-text_sm ms-5">
              Livestream production package
            </p>
          </div>
        </div>
      </div>
      <div className="lg:px-[112px] pt-9 pb-20 lg:py-32 mx-5">
        <div className="md:flex">
          <div className="md:w-6/12"></div>
          <div className="md:w-6/12">
            <div className="mb-6 md:mb-8">
              <div className="mb-1 md:text-title_32_40_600 md:mb-3 text-black text-title_sm">
                <span>Thuy Tien</span>
                <span className="mx-3">X</span>
              </div>
              <p className="text-primary md:mb-4 mb-1 text-text_15_28_500">
                Oct 2022
              </p>
              <p className="text-gray md:text-title_20_36_400 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud. Ut enim ad minim veniam,
                quis nostrud. Ut enim ad minim veniam, quis nostrud.
              </p>
            </div>
            <div className="flex flex-wrap">
              <div className="lg:w-3/12 w-3/6 mb-5 md:mb-0">
                <p className="mb-1 uppercase md:text-title_36_44_600 text-title_md text-primary">
                  $54K
                </p>
                <p className="text-gray text-text_sm">REVENUE</p>
              </div>
              <div className="lg:w-3/12 w-3/6 mb-5 md:mb-0">
                <p className="mb-1 uppercase md:text-title_36_44_600 text-title_md text-primary">
                  $54K
                </p>
                <p className="text-gray text-text_sm">REACH</p>
              </div>
              <div className="lg:w-3/12 w-3/6 mb-5 md:mb-0">
                <p className="mb-1 uppercase md:text-title_36_44_600 text-title_md text-primary">
                  $54K
                </p>
                <p className="text-gray text-text_sm">REACTIONS</p>
              </div>
              <div className="lg:w-3/12 w-3/6 mb-5 md:mb-0">
                <p className="mb-1 uppercase md:text-title_36_44_600 text-title_md text-primary">
                  $54K
                </p>
                <p className="text-gray text-text_sm">METIONS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UiBrandsContent;
