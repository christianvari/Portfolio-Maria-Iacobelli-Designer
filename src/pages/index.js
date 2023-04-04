import * as React from "react";
import Wrapper from "../components/Wrapper";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "./index.module.css";
import Socials from "../components/Socials";

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        {
            hero: file(relativePath: { eq: "hero.png" }) {
                childImageSharp {
                    gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
                }
            }
            markdownRemark(frontmatter: { id: { eq: "hero" } }) {
                html
            }
            about: markdownRemark(frontmatter: { id: { eq: "about-me" } }) {
                html
            }
        }
    `);

    console.log(data);

    return (
        <Wrapper>
            <div className={styles.hero}>
                <GatsbyImage alt="" image={data.hero.childImageSharp.gatsbyImageData} />
                <div
                    dangerouslySetInnerHTML={{
                        __html: data.markdownRemark.html,
                    }}
                />
            </div>
            <div
                className={styles.description}
                dangerouslySetInnerHTML={{
                    __html: data.about.html,
                }}
            />
            <div>
                <Socials />
            </div>
        </Wrapper>
    );
};

export default IndexPage;
