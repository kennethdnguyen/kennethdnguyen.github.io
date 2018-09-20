const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Kenneth Nguyen', // Navigation and Site Title
  siteTitleAlt: 'Kenneth', // Alternative Site title for SEO
  //siteUrl: 'https://portfolio-cara.netlify.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  //siteLogo: '/logos/logo-1024.png', // Used for SEO and manifest
  siteDescription: "Kenneth Nguyen's Portfolio",

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  // userTwitter: '@cara', // Twitter Username
  // ogSiteName: 'cara', // Facebook Site Name
  // ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.red,
  backgroundColor: tailwind.colors.red,
};
