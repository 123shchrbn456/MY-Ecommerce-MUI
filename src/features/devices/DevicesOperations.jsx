import React from "react";
import { Box, Grid, IconButton, useMediaQuery, useTheme } from "@mui/material";
import GridOnIcon from "@mui/icons-material/GridOn";
import GridViewIcon from "@mui/icons-material/GridView";

import SortBy from "../../ui/SortBy";
import FilterMobileAccordionsModal from "../../ui/FilterMobileAccordionsModal";

const DevicesOperations = () => {
    const theme = useTheme();
    const isThinnerThanLarge = useMediaQuery(theme.breakpoints.down("lg"));

    return (
        <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: isThinnerThanLarge ? "space-between" : "flex-end", alignItems: "center" }}
        >
            {isThinnerThanLarge && <FilterMobileAccordionsModal />}
            <Box display="flex">
                <SortBy />
                <IconButton>
                    <GridOnIcon />
                </IconButton>
                <IconButton>
                    <GridViewIcon />
                </IconButton>
            </Box>
        </Grid>
    );
};

export default DevicesOperations;
