import * as React from "react";
import PropTypes from "prop-types";
import { Link as RouterLink, BrowserRouter, Routes, Route } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { blueGrey, deepOrange, grey, yellow } from "@mui/material/colors";
import AppLayout from "./ui/AppLayout";
import Contact from "./pages/Contact";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import DevicesPage from "./pages/DevicesPage";
import SingleDevicePage from "./pages/SingleDevicePage";
import CartPage from "./pages/CartPage";
import MyOrdersPage from "./pages/MyOrdersPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import "./index.css";

// This way is using "href" prop passed to a Link
// const LinkBehavior = React.forwardRef((props, ref) => {
//     const { href, ...other } = props;
//     // Map href (MUI) -> to (react-router)
//     return <RouterLink data-testid="custom-link" ref={ref} to={href} {...other} />;
// });

// This way is using "to" prop passed to a Link
const LinkBehavior = React.forwardRef((props, ref) => {
    const { to, ...other } = props;
    // Map to (MUI) -> to (react-router)
    return <RouterLink data-testid="custom-link" ref={ref} to={to} {...other} />;
});

LinkBehavior.propTypes = {
    to: PropTypes.oneOfType([
        PropTypes.shape({
            hash: PropTypes.string,
            pathname: PropTypes.string,
            search: PropTypes.string,
        }),
        PropTypes.string,
    ]).isRequired,
};

function Router(props) {
    const { children } = props;
    if (typeof window === "undefined") {
        return <StaticRouter location="/">{children}</StaticRouter>;
    }

    // return <MemoryRouter>{children}</MemoryRouter>;
    return <BrowserRouter>{children}</BrowserRouter>;
}

Router.propTypes = {
    children: PropTypes.node,
};

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 577,
            md: 768,
            lg: 1024,
            xl: 1200,
            xxl: 1400,
        },
    },
    palette: {
        /* primary: {
            // main: grey[700],
            // dark: grey[900],
            main: "#7B1FA2",
            dark: blueGrey[800],
            // contrastText: "#fff",
        }, */
        primary: {
            main: "#48484e",
        },
        secondary: {
            main: "#e0e0e0",
        },
        background: {
            // paper: "#CFD8DC",
        },
        // secondary: {
        //     main: deepOrange[700],
        //     dark: deepOrange[900],
        //     contrastText: deepOrange[50],
        // },
    },
    components: {
        // MUI Link behaviour is changed to RouterLink behaviour
        MuiLink: {
            defaultProps: {
                component: LinkBehavior,
                underline: "hover",
            },
        },
        // MUI Buttons behaviour is also changed to RouterLink behaviour
        MuiButtonBase: {
            defaultProps: {
                LinkComponent: LinkBehavior,
            },
        },
        MuiAccordion: {
            styleOverrides: {
                root: {
                    borderRadius: "4px",
                    marginBottom: "8px",
                    "&:before": { height: "0px" } /* Gray line on top is removed */,
                },
            },
            defaultProps: {
                disableGutters: true,
                square: true,
                defaultExpanded: true,
            },
        },
    },
});

function App() {
    return (
        // <Stack sx={{ typography: "body1" }} alignItems="center" spacing={1}>
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    <Route element={<AppLayout />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/devices" element={<DevicesPage />} />
                        <Route path="/devices/:id" element={<SingleDevicePage />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/my-orders" element={<MyOrdersPage />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/sign-in" element={<SignInPage />} />
                        <Route path="/sign-up" element={<SignUpPage />} />
                    </Route>
                </Routes>
            </Router>
        </ThemeProvider>
        // </Stack>
    );
}

export default App;
