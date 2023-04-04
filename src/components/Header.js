import React, { useContext } from "react";
import * as styles from "./Header.module.css";
import ThemeContext from "../context/ThemeContext";
import { useStaticQuery } from "gatsby";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import HeaderMenu from "./HeaderMenu";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

function Header({}) {
    const { dark, toggleDark } = useContext(ThemeContext);
    const data = useStaticQuery(graphql`
        {
            logoLight: file(relativePath: { eq: "logo_light.png" }) {
                childImageSharp {
                    gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
                }
            }
            logoDark: file(relativePath: { eq: "logo_dark.png" }) {
                childImageSharp {
                    gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
                }
            }
        }
    `);

    return (
        <div className={styles.container}>
            <div className={styles.line} />
            <div className="">
                <GatsbyImage
                    alt=""
                    image={
                        dark
                            ? data.logoDark.childImageSharp.gatsbyImageData
                            : data.logoLight.childImageSharp.gatsbyImageData
                    }
                />
            </div>
            <div className={styles.line} />
            <HeaderMenu />
            <div className={styles.line} />
            <div onClick={toggleDark} className={styles.mode}>
                {dark ? <MdOutlineLightMode /> : <MdDarkMode />}
            </div>
            <div className={styles.line} />
        </div>
    );
}

export default Header;
