/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: isProd ? '/AIForTEENS/' : '',
  basePath: isProd ? '/AIForTEENS' : '',
};

module.exports = nextConfig; 