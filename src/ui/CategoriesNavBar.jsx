import { Stack } from "@mui/material";
import React from "react";
import CascadingHoverMenus from "./CascadingHoverMenus";

const CategoriesNavBar = () => {
    return (
        <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={18}
            height={70}
            sx={{ border: "1px solid black", bgcolor: "#647687", color: "#A4C400" }}
        >
            <CascadingHoverMenus />
        </Stack>
    );
};

export default CategoriesNavBar;
