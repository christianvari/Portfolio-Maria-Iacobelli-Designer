import React from "react";
import * as styles from "./HeaderMenu.module.css";

function HeaderMenu() {
    return (
        <div className={styles.container}>
            <div className={styles.link}>
                <span>ABOUT ME</span>
            </div>
            <div className={styles.link}>
                <span>PROJECTS</span>
            </div>
            <div className={styles.link}>
                <span>CONTACT</span>
            </div>
            <div className={styles.link}>
                <span>CV</span>
            </div>
        </div>
    );
}

export default HeaderMenu;
