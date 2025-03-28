try {
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
} catch (error) {
  console.error("Error in next.config.js:", error); // Log the full error object
  process.exit(1); // Exit the process to signal failure to GitHub Actions
}
