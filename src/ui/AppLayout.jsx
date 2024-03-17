import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Box, Container } from "@mui/material";

const AppLayout = () => {
    return (
        <>
            <Header />
            <main>
                <Box sx={{ bgcolor: "white" }}>
                    <Container maxWidth="xl">
                        <Outlet />
                    </Container>
                </Box>
            </main>
        </>
    );
};

export default AppLayout;
