import { Stack } from "@mui/material";
import React from "react";
import CascadingHoverMenus from "./CascadingHoverMenus";

const CategoriesNavBar = () => {
    return (
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} mb={3} p={1} sx={{ bgcolor: "#EEEEEE" }}>
            <CascadingHoverMenus />
        </Stack>
    );
};

export default CategoriesNavBar;
