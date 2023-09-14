/** @type {import('next').NextConfig} */

// const { i18n } = require('./next-i18next.config.js');

require('dotenv-flow').config({
  node_env: process.env.APP_ENV || process.env.NODE_ENV || 'development',
});

const env = {};
Object.keys(process.env).forEach((key) => {
  if (key.startsWith('NEXT_PUBLIC_')) {
    env[key] = process.env[key];
  }
});

const nextConfig = {
  experimental: {
    appDir: true,
    serverActions: true,
  },
  images: {
    domains: ['wygprvxieuhsvccwhice.supabase.co'],
  },
  // i18n,
};
module.exports = nextConfig;
