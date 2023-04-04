import { GlobalStyles } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

const defaultState = {
    dark: true,
    toggleDark: () => {},
};

const ThemeContext = React.createContext(defaultState);

const supportsDarkMode = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches === true;

class ThemeProvider extends React.Component {
    state = {
        dark: true,
    };

    toggleDark = () => {
        let dark = !this.state.dark;
        localStorage.setItem("dark", JSON.stringify(dark));
        this.setState({ dark });
    };

    componentDidMount() {
        const dark = JSON.parse(localStorage.getItem("dark"));

        if (dark === false) {
            this.setState({ dark });
        } else if (supportsDarkMode()) {
            this.setState({ dark: true });
        }
    }

    render() {
        const { children } = this.props;
        const { dark } = this.state;

        return (
            <ThemeContext.Provider
                value={{
                    dark,
                    toggleDark: this.toggleDark,
                }}
            >
                <div className={dark ? "custom-theme-dark" : "custom-theme-light"}>
                    <GlobalStyles
                        styles={{
                            body: {
                                background: dark
                                    ? "linear-gradient(180deg, #040450 0%, #221e5e 21.87%, #1144aa 100%), #dda7db;"
                                    : "linear-gradient(180deg, #c79bfe 0%, #e6a8e4 43.05%, #ffcedd 100%), #dda7db;",
                                backgroundAttachment: "fixed",
                            },
                        }}
                    />
                    {children}
                </div>
            </ThemeContext.Provider>
        );
    }
}

ThemeProvider.propTypes = {
    children: PropTypes.element.isRequired,
};

export default ThemeContext;

export { ThemeProvider };
