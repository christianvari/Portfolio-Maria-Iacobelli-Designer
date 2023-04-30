import * as React from "react";
import { graphql } from "gatsby";
import * as style from "./ProjectOverview.module.css";

export default function ProjectOverview({ parentColor, title, description }) {
    return (
        <div style={{ background: parentColor }} className={style.container}>
            <h3 className={style.title}>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export const query = graphql`
    fragment ProjectOverviewContent on ProjectOverview {
        id
        title
        description
    }
`;
