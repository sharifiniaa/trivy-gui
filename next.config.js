/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['antd']);
const withLess = require('@zeit/next-less');
const { withPlugins } = require('next-compose-plugins');

// module.exports = withTM(
//   withLess({
//     lessLoaderOptions: {
//       javascriptEnabled: true,
//     },
//   })
// );

module.exports = withPlugins([withTM], {
  experimental: {
    appDir: true,
  },
});

// const nextConfig = {
//   experimental: {
//     appDir: true,
//   },
// };

// module.exports = nextConfig
