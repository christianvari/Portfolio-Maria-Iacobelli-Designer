import * as React from "react";
import Wrapper from "../components/Wrapper";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "./index.module.css";
import Socials from "../components/Socials";

const IndexPage = ({ location, data }) => {
    const { home } = data;

    return (
        <Wrapper location={location}>
            <div className={styles.hero}>
                <GatsbyImage
                    alt={home.image.alt}
                    image={getImage(home.image.gatsbyImageData)}
                    objectFit="scale-down"
                />
                <div>
                    <h2>{home.greetings}</h2>
                    <h1>{home.hero}</h1>
                </div>
            </div>
            <div className={styles.desc}>
                <p style={{ fontWeight: "bold" }}>{home.description}</p>
                <p className={styles.subdescription}>{home.subdescription}</p>
            </div>
            <div className={styles.social}>
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
