import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Box, Container } from "@mui/material";
import Footer from "./Footer";

const AppLayout = () => {
    return (
        <>
            <Header />
            <Box
                component="main"
                className="main-content"
                sx={{
                    paddingTop: 2,
                    background: "linear-gradient(180deg, rgba(241,241,241,1) 0%, rgba(209,209,209,1) 55%)",
                }}
            >
                <Container maxWidth="xxl">
                    <Outlet />
                </Container>
            </Box>
            <Footer />
        </>
    );
};

export default AppLayout;
