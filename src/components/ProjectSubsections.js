import * as React from "react";
import { graphql, navigate } from "gatsby";
import * as style from "./ProjectSubsections.module.css";
import { GatsbyImage } from "gatsby-plugin-image";

export default function ProjectSubsections({ title, subsections, parentSlug }) {
    return (
        <div className={style.container}>
            <h3 className={style.title}>{title}</h3>
            <div className={style.sectionsContainer}>
                {subsections.map((x, id) => (
                    <div
                        key={id}
                        className={style.item}
                        onClick={() => {
                            console.log("hey");
                            navigate(`/projects/${parentSlug}/${x.slug}`);
                        }}
                    >
                        <GatsbyImage alt={x.icon.alt} image={x.icon.gatsbyImageData} />
                        <h4 style={{ textAlign: "center" }}>{x.title}</h4>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: x.preview,
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export const query = graphql`
    fragment ProjectSubsectionsContent on ProjectSubsections {
        id
        title
        subsections {
            id
            slug
            title
            icon {
                alt
                gatsbyImageData
            }
            preview
        }
    }
`;
