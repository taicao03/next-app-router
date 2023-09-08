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
        border: '#E4E4E4',
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
        '100px': '100px',
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
        '192': '192px',
        '162': '162px',
        '216': '216px',
        '210': '210px',
        '335': '335px',
        '344': '344px',
        '252': '252px',
        '257': '257px',
        '288': '288px',
        '450': '450px',
        '448': '448px',
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
        '61px': '61px',
        '36px': '36px',
        '500px': '500px',
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
        text_13_16_600: [
          '13px',
          {
            lineHeight: '16px',
            fontWeight: '600',
          },
        ],

        text_13_16_400: [
          '13px',
          {
            lineHeight: '16px',
            fontWeight: '400',
          },
        ],
        text_13_22_400: [
          '13px',
          {
            lineHeight: '22px',
            fontWeight: '400',
          },
        ],
        text_13_22_600: [
          '13px',
          {
            lineHeight: '22px',
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
        title_20_36_400: [
          '20px',
          {
            lineHeight: '36px',
            fontWeight: '400',
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
        title_28_36_600: [
          '28px',
          {
            lineHeight: '36px',
            fontWeight: '600',
          },
        ],
        title_28_32_700: [
          '28px',
          {
            lineHeight: '32px',
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
        text_15_28_500: [
          '15px',
          {
            lineHeight: '28px',
            fontWeight: '500',
          },
        ],
        title_20_28_700: [
          '20px',
          {
            lineHeight: '28px',
            fontWeight: '700',
          },
        ],
        title_20_32_600: [
          '20px',
          {
            lineHeight: '32px',
            fontWeight: '600',
          },
        ],
        title_20_32_700: [
          '20px',
          {
            lineHeight: '32px',
            fontWeight: '700',
          },
        ],
        title_20_32_400: [
          '20px',
          {
            lineHeight: '32px',
            fontWeight: '400',
          },
        ],
        title_32_40_600: [
          '32px',
          {
            lineHeight: '40px',
            fontWeight: '600',
          },
        ],
        title_36_44_600: [
          '36px',
          {
            lineHeight: '44px',
            fontWeight: '600',
          },
        ],
        title_36_48_700: [
          '36px',
          {
            lineHeight: '48px',
            fontWeight: '700',
          },
        ],
        title_44_53_700: [
          '44px',
          {
            lineHeight: '52px',
            fontWeight: '700',
          },
        ],
        title_44_58_600: [
          '44px',
          {
            lineHeight: '58px',
            fontWeight: '600',
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
