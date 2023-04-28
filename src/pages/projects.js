import * as React from "react";
import Wrapper from "../components/Wrapper";
import { graphql, useStaticQuery } from "gatsby";
import Project from "../components/Project";
import * as style from "./projects.module.css";

const ProjectsPage = ({ location }) => {
    const data = useStaticQuery(graphql`
        {
            allProject {
                edges {
                    node {
                        title
                        summary
                        color
                        subtitle
                        image {
                            gatsbyImageData
                        }
                    }
                }
            }
        }
    `);

    return (
        <Wrapper location={location}>
            <div className={style.container}>
                {data.allProject.edges.map((e, id) => (
                    <Project key={id} data={e.node} />
                ))}
            </div>
        </Wrapper>
    );
};

export default ProjectsPage;
