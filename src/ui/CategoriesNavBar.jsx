import { Stack, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import CascadingHoverMenus from "./CascadingHoverMenus";
import MobileCategoriesList from "./MobileCategoriesList";

const CategoriesNavBar = () => {
    const theme = useTheme();
    const isThinnerThanLarge = useMediaQuery(theme.breakpoints.down("lg"));
    return (
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} mb={3} p={1} sx={{ bgcolor: "#EEEEEE" }}>
            {!isThinnerThanLarge && <CascadingHoverMenus />}
            {isThinnerThanLarge && <MobileCategoriesList />}
        </Stack>
    );
};

export default CategoriesNavBar;
