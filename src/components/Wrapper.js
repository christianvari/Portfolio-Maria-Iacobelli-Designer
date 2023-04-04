import React from "react";
import Header from "./Header";
import { ThemeProvider } from "../context/ThemeContext";
import "../styles/global.css";
import * as styles from "./Wrapper.module.css";

function Wrapper({ children }) {
    return (
        <ThemeProvider>
            <>
                <Header />
                <main className={styles.container}>{children}</main>
            </>
        </ThemeProvider>
    );
}

export default Wrapper;
