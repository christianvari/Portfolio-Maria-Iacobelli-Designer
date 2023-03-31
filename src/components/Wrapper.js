import React from "react";
import Header from "./Header";
import { ThemeProvider } from "../context/ThemeContext";

function Wrapper({ children }) {
    return (
        <ThemeProvider>
            <Header />
            {children}
        </ThemeProvider>
    );
}

export default Wrapper;
