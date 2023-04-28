import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { FaLinkedin, FaInstagram, FaMailBulk } from "react-icons/fa";
import * as style from "./Socials.module.css";
import { mail } from "fluent-mailto";

function Socials() {
    const data = useStaticQuery(graphql`
        {
            allSocial {
                edges {
                    node {
                        type
                        url
                    }
                }
            }

            email {
                type
                to
                subject
                body
            }
        }
    `);

    const content = [...data.allSocial.edges.map((x) => x.node), data.email];
    console.log(content);

    return (
        <div className={style.container}>
            {content.map((node, i) => {
                let Icon;
                switch (node.type) {
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
                            if (node.to) {
                                return window.open(
                                    mail
                                        .to(node.to)
                                        .subject(node.subject)
                                        .body(node.body)
                                        .build(),
                                    "_blank",
                                );
                            }
                            window.open(node.url, "_blank");
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
