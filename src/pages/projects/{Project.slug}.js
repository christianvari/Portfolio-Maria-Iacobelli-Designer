import * as React from "react";
import Wrapper from "../../components/Wrapper";
import { graphql } from "gatsby";
import * as style from "./project_slug.module.css";
import { GatsbyImage } from "gatsby-plugin-image";
import * as sections from "../../components/sections";

export default function Page({ location, data }) {
    const { project } = data;

    return (
        <Wrapper location={location}>
            <div className={style.main}>
                <div className={style.box}>
                    <div
                        style={{ background: project.color }}
                        className={style.container}
                    >
                        <div className={style.containerHeader}>
                            <h1 className={style.title}>{project.title}</h1>
                        </div>
                        <GatsbyImage
                            alt={project.image.alt}
                            image={project.image.gatsbyImageData}
                            objectFit="scale-down"
                        />
                        <div>
                            <p>{project.summary}</p>
                        </div>
                    </div>
                    {project.blocks.map((block) => {
                        const { id, blocktype, ...componentProps } = block;
                        const Component = sections[blocktype];
                        return (
                            <Component
                                key={id}
                                parentColor={project.color}
                                {...componentProps}
                            />
                        );
                    })}
                </div>
            </div>
        </Wrapper>
    );
}

export const query = graphql`
    query Project($id: String!) {
        project(id: { eq: $id }) {
            slug
            title
            summary
            color
            subtitle
            image {
                alt
                gatsbyImageData
            }
            blocks: content {
                id
                blocktype
                ...ProjectOverviewContent
            }
        }
    }
`;
