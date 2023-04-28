/**
 * @type {import('gatsby').GatsbyConfig}
 */
require(`dotenv`).config({ path: `.env` });

module.exports = {
    siteMetadata: {
        title: `Maria Iacobelli Designer`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sitemap",
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                // You can add multiple tracking ids and a pageview event will be fired for all of them.
                trackingIds: [process.env.GA_TRACKING_ID],
            },
        },
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/logo_light.png",
            },
        },
        "gatsby-plugin-mdx",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages",
        },
        `gatsby-transformer-remark`,
        {
            resolve: `@kontent-ai/gatsby-source`,
            options: {
                projectId: process.env.KONTENT_PROJECT_ID,
                languageCodenames: [`en-US`],
            },
        },
        {
            resolve: `gatsby-omni-font-loader`,
            options: {
                enableListener: true,
                preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
                web: [
                    {
                        name: `Gentium Plus`,
                        file: `https://fonts.googleapis.com/css2?family=Gentium+Plus:ital,wght@0,400;0,700;1,400;1,700&display=swap`,
                    },
                ],
            },
        },
    ],
};
