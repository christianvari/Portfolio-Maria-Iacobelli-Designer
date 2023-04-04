import React from "react";
import Header from "./Header";
import { ThemeProvider } from "../context/ThemeContext";
import "../styles/global.css";
import * as styles from "./Wrapper.module.css";

function Wrapper({ location, children }) {
    return (
        <ThemeProvider>
            <>
                <Header location={location} />
                <main className={styles.container}>{children}</main>
            </>
        </ThemeProvider>
    );
}

export default Wrapper;
