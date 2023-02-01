module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://yonasstephen.com/`,
    // Your Name
    name: 'Yonas Stephen',
    // Main Site Title
    title: `Yonas Stephen | Software Engineer`,
    // Description that goes under your name in main bio
    description: `Software Engineer `,
    // Optional: Twitter account handle
    author: `@yonasstephen`,
    // Optional: Github account URL
    github: `https://github.com/yonasstephen`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/yonasstephen/`,
    // Content of the About Me section
    about: `Software Engineer with 7 years of experience. I started my career in full stack web & mobile development. Then distributed systems caught my interests into the backend world especially after reading Designing Data Intensive Application book (you should read it, too!). Keep learning new things is the way to go!`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Swift of Airbnb',
        description:
          'A self-taught project of learning Swift by making some of Airbnb iOS app screens. ',
        link: 'https://github.com/yonasstephen/swift-of-airbnb',
      },
      {
        name: 'ratelimiter',
        description:
          'Extensible rate limiter module in Go. Pick the algorithm & the data store you want.',
        link: 'https://github.com/yonasstephen/ratelimiter',
      },
      {
        name: 'Wedding RSVP App',
        description:
          'A static wedding website for fellow groom devs out there :) Built using NextJS, CSSGrid, StyledComponent',
        link: 'https://github.com/yonasstephen/yonasyulin',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Meta',
        description: 'Software Engineer @ Instagram ML Data Authoring, Jun 2022 - Present',
        link: 'https://www.meta.com',
      },
      {
        name: 'Gojek',
        description: 'Senior Software Engineer, September 2017 - May 2022',
        link: 'https://gojek.io',
      },
      {
        name: 'Anacle Systems',
        description: 'Software Engineer, July 2014 - August 2017',
        link: 'https://www.anacle.com/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Golang, JavaScript (ES6+), React, Java, C#,  Python',
      },
      {
        name: 'Data Stores',
        description: 'PostreSQL, ElasticSearch, Redis',
      },
      {
        name: 'Other',
        description:
          'Docker, Google Cloud Platform, CI / CD (Gitlab CI), Microservices, Apache Kafka, RabbitMQ, Apache Flink, Apache Zookeeper, Chef',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
