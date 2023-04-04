import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { FaLinkedin, FaInstagram, FaMailBulk } from "react-icons/fa";
import * as style from "./Socials.module.css";
import { mail } from "fluent-mailto";

function Socials() {
    const data = useStaticQuery(graphql`
        {
            allSocialJson {
                edges {
                    node {
                        title
                        link
                        to
                        subject
                        body
                    }
                }
            }
        }
    `);

    return (
        <div className={style.container}>
            {data.allSocialJson.edges.map((node, i) => {
                let Icon;
                switch (node.node.title) {
                    case "LinkedIn":
                        Icon = FaLinkedin;
                        break;
                    case "Instagram":
                        Icon = FaInstagram;
                        break;
                    default:
                        Icon = FaMailBulk;
                }

                return (
                    <div
                        key={i}
                        onClick={() => {
                            if (node.node.to) {
                                window.open(
                                    mail
                                        .to(node.node.to)
                                        .subject(node.node.subject)
                                        .body(node.node.body)
                                        .build(),
                                    "_blank",
                                );
                            }
                            window.open(node.node.link, "_blank");
                        }}
                    >
                        <Icon />
                    </div>
                );
            })}
        </div>
    );
}

export default Socials;
