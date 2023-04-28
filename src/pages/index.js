import * as React from "react";
import Wrapper from "../components/Wrapper";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "./index.module.css";
import Socials from "../components/Socials";

const IndexPage = ({ location, data }) => {
    console.log(data);
    const { home } = data;

    return (
        <Wrapper location={location}>
            <div className={styles.hero}>
                <GatsbyImage
                    alt={home.image.alt}
                    image={getImage(home.image.gatsbyImageData)}
                />
                <div>
                    <h2>{home.greetings}</h2>
                    <h1>{home.hero}</h1>
                </div>
            </div>
            <div className={styles.desc}>
                <p>{home.description}</p>
                <p style={{ fontStyle: "italic" }}>{home.subdescription}</p>
            </div>
            <div>
                <Socials />
            </div>
        </Wrapper>
    );
};

export default IndexPage;

export const query = graphql`
    {
        home {
            description
            subdescription
            greetings
            hero
            image {
                id
                gatsbyImageData
                alt
            }
        }
    }
`;
