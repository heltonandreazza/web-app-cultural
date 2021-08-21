const path = require('path')
const dotenv = require('dotenv')

dotenv.config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
})

module.exports = {
  siteMetadata: {
    title: 'Academia Cultural',
    name: 'Academia Cultural',
    author: {
      name: 'Helton Andreazza',
      summary: 'Full stack developer.',
    },
    description: `Academia que oferece produtos e serviços para melhorar a sua saúde e qualidade de vida, 
    criar projetos de vida para emagrecer, perda de peso, ganhar massa muscular, 
    eliminar dores nas costas e no joelho, fazer musculaçao, pilates e fisioterapia`,
    url: 'https://www.academia-cultural.com',
    social: {
      insta: '@academiacultural',
      facebook: '@academiatimbo',
      twitter: '@academiatimbo',
    },
    keywords: `saúde, fisioterapia, qualidade de vida, dor na coluna, dor no joelho, qualidade vida, 
      exercício físico, academia cultural timbó, ortopedia, familia, pilates, academia, personal trainer, 
      musculação, emagrecer, fibromialgia, idoso, vida saudavel, dor nas costas, projetos de vida, academia cultural`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        printRejected: true, // Print removed selectors and processed file names
        tailwind: true, // Enable tailwindcss support
        // develop: true, // Enable while using `gatsby develop`
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'G-3BTWDG7KSJ',
          'AW-364234672', // Google Ads / Adwords / AW
        ],
        gtagConfig: {
          cookie_expires: 7,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-gdpr-cookies',
      options: {
        googleAnalytics: {
          trackingId: 'G-3BTWDG7KSJ', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-analytics', // default
          anonymize: true, // default
          allowAdFeatures: false, // default
        },
        googleTagManager: {
          trackingId: 'AW-364234672', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-tagmanager', // default
          dataLayerName: 'dataLayer', // default
        },
        environments: ['production', 'development'],
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.NODE_ENV === 'development' ? 'preview.contentful.com' : 'cdn.contentful.com',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.join(__dirname, 'src', 'images'),
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-disqus',
      options: {
        shortname: 'academia-cultural-1',
      },
    },
    {
      resolve: 'gatsby-source-instagram',
      options: {
        username: '4580283668',
      },
    },
    'gatsby-plugin-react-helmet',
  ],
}
