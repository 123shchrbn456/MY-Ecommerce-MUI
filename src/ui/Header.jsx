import React from "react";
import PrimaryNavBar from "./PrimaryNavBar";
import CategoriesNavBar from "./CategoriesNavBar";
import { Box, Button, Paper, Stack } from "@mui/material";

const Header = () => {
    return (
        <>
            <PrimaryNavBar />
            <CategoriesNavBar />
        </>
    );
};

export default Header;
