import React from "react";
import * as styles from "./HeaderMenu.module.css";
import { navigate } from "gatsby";
import { withPrefix } from "gatsby";

function HeaderMenu() {
    const currentPage = withPrefix(window.location.pathname);
    return (
        <div className={styles.container}>
            <div
                className={[styles.link, currentPage === "/" ? styles.selected : ""].join(
                    " ",
                )}
                onClick={() => navigate("/")}
            >
                <span>ABOUT ME</span>
            </div>
            <div
                className={[
                    styles.link,
                    currentPage.includes("/projects") ? styles.selected : "",
                ].join(" ")}
                onClick={() => navigate("/projects")}
            >
                <span>PROJECTS</span>
            </div>
            <div
                className={[
                    styles.link,
                    currentPage.includes("/contacts") ? styles.selected : "",
                ].join(" ")}
                onClick={() => navigate("/contacts")}
            >
                <span>CONTACTS</span>
            </div>
            <div className={styles.link}>
                <span>CV</span>
            </div>
        </div>
    );
}

export default HeaderMenu;
