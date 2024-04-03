import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import CascadingHoverMenus from "./CascadingHoverMenus";
import MobileCategoriesList from "./MobileCategoriesList";

const CategoriesNavBar = () => {
    const theme = useTheme();
    const isThinnerThanLarge = useMediaQuery(theme.breakpoints.down("lg"));
    return (
        <Box>
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={1} mb={2} p={1} sx={{ bgcolor: "#D3D3D3" }}>
                {!isThinnerThanLarge && <CascadingHoverMenus />}
                {isThinnerThanLarge && <MobileCategoriesList />}
            </Stack>
        </Box>
    );
};

export default CategoriesNavBar;
