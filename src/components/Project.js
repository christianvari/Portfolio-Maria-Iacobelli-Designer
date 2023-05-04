import React from "react";
import * as style from "./Project.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { navigate } from "gatsby";

function Project({ data }) {
    return (
        <div className={style.container}>
            <GatsbyImage
                alt={data.image.alt}
                image={getImage(data.image.gatsbyImageData)}
                objectFit="scale-down"
            />
            <div className={style.right}>
                <p style={{ fontWeight: "700" }}>{data.title}</p>
                <p style={{ fontSize: "1.5rem", fontWeight: "400" }}>{data.subtitle}</p>
                <p style={{ fontSize: "1rem", fontWeight: "400" }}>{data.summary}</p>
                <div
                    className={style.buttonContainer}
                    onClick={() => {
                        navigate(`/projects/${data.slug}`);
                    }}
                >
                    <button className={style.button}>READ MORE</button>
                </div>
            </div>
        </div>
    );
}

export default Project;
