/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
module.exports = {
  i18n: {
    locales: ['en', 'vie'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['media.graphassets.com'],
  },
  
};
