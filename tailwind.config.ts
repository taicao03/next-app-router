import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        transparent: 'transparent',
        primary: '#DC1A5D',
        secondary: '#D9D9D9',
        gray: '#757575',
      },
      screens: {
        sm: '575px',
        md: '768px',
        lg: '991px',
        xl: '1199px',
      },
      padding: {
        '111px': '111px',
        '112px': '112px',
        '18px': '18px',
        '52px': '52px',
        '50px': '50px',
        '72px': '72px',
        '94px': '94px',
        '133px': '133px',
        '136px': '136px',
        '60px': '60px',
        '80px': '80px',
        '215px': '215px',
        '120px': '120px',
        '125px': '125px',
        '44px': '44px',
        '42px': '42px',
        '66px': '66px',
      },
      height: {
        '680': '680px',
        '196': '196px',
        '44': '44px',
        '66': '66px',
        '120': '120px',
        '335': '335px',
      },
      width: {
        '680': '680px',
        '196': '196px',
        '44': '44px',
        '66': '66px',
      },
      margin: {
        '870px': '870px',
      },
      borderRadius: {
        5: '20px',
        4: '16px',
        3: '12px',
      },
      fontFamily: {
        sans: ['MePoppins', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      fontSize: {
        base: [
          '15px',
          {
            lineHeight: '24px',
            fontWeight: '400',
          },
        ],
        base_sm: [
          '12px',
          {
            lineHeight: '16px',
            fontWeight: '400',
          },
        ],
        nav: [
          '15px',
          {
            lineHeight: '24px',
            fontWeight: '700',
          },
        ],
        text_sm: [
          '16px',
          {
            lineHeight: '24px',
            fontWeight: '600',
          },
        ],
        label: [
          '16px',
          {
            lineHeight: '20px',
            fontWeight: '700',
          },
        ],
        title: [
          '20px',
          {
            lineHeight: '36px',
            fontWeight: '700',
          },
        ],

        title_sm: [
          '24px',
          {
            lineHeight: '32px',
            fontWeight: '700',
          },
        ],
        title_md: [
          '28px',
          {
            lineHeight: '44px',
            fontWeight: '700',
          },
        ],
        title_32_44_700: [
          '32px',
          {
            lineHeight: '44px',
            fontWeight: '700',
          },
        ],
        title_56_64_700: [
          '56px',
          {
            lineHeight: '64px',
            fontWeight: '700',
          },
        ],
        text_15_28_400: [
          '15px',
          {
            lineHeight: '28px',
            fontWeight: '400',
          },
        ],
        title_20_28_700: [
          '20px',
          {
            lineHeight: '28px',
            fontWeight: '700',
          },
        ],
        title_lg: [
          '48px',
          {
            lineHeight: '58px',
            fontWeight: '700',
          },
        ],
        base_secondary: [
          '20px',
          {
            lineHeight: '32px',
            fontWeight: '400',
          },
        ],
        button: [
          '16px',
          {
            lineHeight: '24px',
            fontWeight: '700',
          },
        ],

        header: [
          '20px',
          {
            lineHeight: '36px',
            fontWeight: '700',
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
