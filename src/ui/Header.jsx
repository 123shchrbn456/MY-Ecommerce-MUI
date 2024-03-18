import React from "react";
import PrimaryNavBar from "./PrimaryNavBar";
import CategoriesNavBar from "./CategoriesNavBar";
import { Box, Button, Paper, Stack } from "@mui/material";

const Header = () => {
    return (
        <>
            <PrimaryNavBar />
            <CategoriesNavBar />
            {/* <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                mb={4}
                p={1}
                sx={{ border: "3px solid black", bgcolor: "#647687", color: "#A4C400" }}
            >
                <Button sx={{ border: "1px solid black", bgcolor: "white", color: "black" }}>One</Button>
                <Button sx={{ border: "1px solid black", bgcolor: "white", color: "black" }}>Two</Button>
                <Button sx={{ border: "1px solid black", bgcolor: "white", color: "black" }}>Three</Button>
            </Stack> */}
        </>
    );
};

export default Header;
