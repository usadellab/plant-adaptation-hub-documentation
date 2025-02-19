const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
});

module.exports = withNextra({
  output: 'export',
  basePath: '/plant-adaptation-hub-documentation',
  images: {
    unoptimized: true
  },
});
