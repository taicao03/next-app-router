'use client';
import Button from '@/components/common/ui/button';

const UiBrandsContent = () => {
  const creatorConnect = [
    {
      title: 'Content Direction',
      icon: '/images/svg/creator_svg/content.svg',
      text: 'Giving advices to creators for  developing tiktok channel.',
    },
    {
      title: 'Channel Optimization',
      icon: '/images/svg/creator_svg/channel.svg',
      text: "As TikTok Shop specialist, meLive takes care & optimize creator's channel.",
    },
    {
      title: 'Livestream Optimization',
      icon: '/images/svg/creator_svg/livestream.svg',
      text: 'Consulting,  training and optimizing the efficiency of livestream optimization',
    },
    {
      title: 'Creator Collaboration',
      icon: '/images/svg/creator_svg/collap.svg',
      text: 'Connect & Create opportunities for cooperation with the reputational brands',
    },
  ];

  return (
    <>
      <div className="lg:mx-[112px] lg:mb-[60px] mt-0 mx-5">
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
              className={`group md:w-3/12 cursor-pointer hover md:mb-0 mb-3 px-5 md:py-4 py-6  text-black rounded-3 border-primary border  ${
                index === 3 ? 'md:me-0' : 'lg:me-8 md:me-4'
              }`}
              key={index}
            >
              <img src={item?.icon} className="mb-5" alt="" />
              <h2 className="text-title_20_32_600 mb-1">{item?.title}</h2>
              <p className="text-gray text-base ">{item?.text}</p>
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
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M17.4278 8.7849C16.6341 9.57689 15.3478 9.57689 14.5541 8.7849C13.7606 7.99291 13.7606 6.70874 14.5541 5.91675C15.3478 5.12476 16.6341 5.12476 17.4278 5.91675C18.2213 6.70874 18.2213 7.99291 17.4278 8.7849Z"
                  fill="white"
                />
                <path
                  d="M20.2037 11.8579C19.9561 11.8579 19.7086 11.7634 19.5201 11.5742C19.1431 11.1968 19.1439 10.5852 19.5213 10.2085C20.2862 9.44505 20.7073 8.43016 20.7073 7.35082C20.7073 6.27148 20.2862 5.25659 19.5213 4.49316C19.1439 4.11621 19.1431 3.50488 19.5201 3.1272C19.8968 2.74976 20.5084 2.74902 20.8858 3.12598C22.0164 4.25439 22.639 5.75463 22.639 7.35082C22.639 8.94676 22.0164 10.4472 20.8858 11.5757C20.6973 11.7639 20.4505 11.8579 20.2037 11.8579Z"
                  fill="white"
                />
                <path
                  d="M22.3882 14.7014C22.1407 14.7014 21.8931 14.6069 21.7047 14.4179C21.3277 14.0403 21.3284 13.4289 21.7059 13.052C23.2317 11.529 24.0723 9.50437 24.0723 7.35081C24.0723 5.19725 23.2317 3.1726 21.7059 1.64965C21.3284 1.2727 21.3277 0.661376 21.7047 0.283691C22.0816 -0.0937493 22.6929 -0.0944817 23.0704 0.282471C24.962 2.17041 26.004 4.68065 26.0037 7.35081C26.0037 10.021 24.962 12.5315 23.0704 14.4194C22.8819 14.6074 22.6351 14.7014 22.3882 14.7014Z"
                  fill="white"
                />
                <path
                  d="M11.7729 11.8579C11.5261 11.8579 11.2793 11.7639 11.0906 11.5757C9.95996 10.4472 9.3374 8.94676 9.3374 7.35082C9.3374 5.75463 9.95996 4.25439 11.0906 3.12598C11.468 2.74902 12.0796 2.74951 12.4563 3.1272C12.8332 3.50464 12.8325 4.11621 12.4551 4.49316C11.6902 5.25659 11.269 6.27148 11.269 7.35082C11.269 8.43016 11.6902 9.44505 12.4551 10.2085C12.8325 10.5852 12.8332 11.1968 12.4563 11.5742C12.2678 11.7632 12.0203 11.8579 11.7729 11.8579Z"
                  fill="white"
                />
                <path
                  d="M9.58837 14.7014C9.3413 14.7014 9.09448 14.6074 8.906 14.4192C7.0144 12.5312 5.97266 10.021 5.97266 7.35081C5.97266 4.68041 7.0144 2.17016 8.906 0.282226C9.28344 -0.0944818 9.89501 -0.0939934 10.2717 0.283691C10.6487 0.661132 10.6479 1.27246 10.2705 1.64941C8.74462 3.17236 7.90405 5.19701 7.90405 7.35057C7.90405 9.50413 8.74462 11.529 10.2705 13.052C10.6479 13.4289 10.6487 14.0403 10.2717 14.4179C10.0832 14.6069 9.83568 14.7014 9.58837 14.7014Z"
                  fill="white"
                />
                <path
                  d="M28.7175 16.3711H3.25927C2.01147 16.3711 1 17.3825 1 18.6301V29.7407C1 30.9885 2.01147 31.9999 3.25927 31.9999H28.7172C29.965 31.9999 30.9765 30.9885 30.9765 29.7407V18.6301C30.9765 17.3825 29.965 16.3711 28.7175 16.3711ZM8.42943 29.1013H4.87109C4.33788 29.1013 3.90551 28.6689 3.90551 28.1354V20.2356C3.90551 19.7024 4.33788 19.2697 4.87109 19.2697C5.40453 19.2697 5.8369 19.7021 5.8369 20.2356V27.1696H8.42943C8.96287 27.1696 9.39525 27.602 9.39525 28.1354C9.39525 28.6689 8.96287 29.1013 8.42943 29.1013ZM12.3874 28.1354C12.3874 28.6689 11.9551 29.1013 11.4216 29.1013C10.8882 29.1013 10.4558 28.6689 10.4558 28.1354V20.2356C10.4558 19.7024 10.8882 19.2697 11.4216 19.2697C11.9551 19.2697 12.3874 19.7021 12.3874 20.2356V28.1354ZM20.5134 20.5149L18.1284 28.4145C18.1281 28.4152 18.1279 28.416 18.1276 28.4167C17.8686 29.3007 16.5481 29.279 16.28 28.4167C16.2798 28.416 16.2795 28.4152 16.2793 28.4145L13.8943 20.5149C13.7402 20.0041 14.029 19.4653 14.5398 19.311C15.05 19.1569 15.5893 19.4458 15.7434 19.9565L17.2038 24.7937L18.6643 19.9565C18.8186 19.4458 19.3574 19.1567 19.8681 19.311C20.3786 19.4653 20.6677 20.0041 20.5134 20.5149ZM26.455 22.7224C26.9885 22.7224 27.4208 23.1547 27.4208 23.6882C27.4208 24.2214 26.9885 24.654 26.455 24.654H23.7143V27.1696H26.9753C27.5087 27.1696 27.9411 27.602 27.9411 28.1354C27.9411 28.6689 27.5087 29.1013 26.9753 29.1013H22.7485C22.215 29.1013 21.7827 28.6689 21.7827 28.1354V20.2356C21.7827 19.7024 22.215 19.2697 22.7485 19.2697H27.1054C27.6386 19.2697 28.0712 19.7021 28.0712 20.2356C28.0712 20.769 27.6386 21.2014 27.1054 21.2014H23.7141V22.7224H26.455Z"
                  fill="white"
                />
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
              Big Event/ campaign with top creators
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
              Retainer Collab - long term
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
