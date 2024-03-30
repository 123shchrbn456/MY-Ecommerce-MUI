import React from "react";
import { Box, Grid, IconButton, useMediaQuery, useTheme } from "@mui/material";
import GridOnIcon from "@mui/icons-material/GridOn";
import GridViewIcon from "@mui/icons-material/GridView";

import SortBy from "../../ui/SortBy";
import FilterMobileAccordionsModal from "../../ui/FilterMobileAccordionsModal";
import SortByMobile from "../../ui/SortByMobile";

const DevicesOperations = ({ changeGridHandler }) => {
    const theme = useTheme();
    const isThinnerThanLarge = useMediaQuery(theme.breakpoints.down("lg"));

    const smallAmountGrid = isThinnerThanLarge ? 12 : 4;
    const manyAmountGrid = isThinnerThanLarge ? 6 : 3;

    return (
        <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: isThinnerThanLarge ? "space-between" : "flex-end", alignItems: "center" }}
        >
            {isThinnerThanLarge && <FilterMobileAccordionsModal />}
            <Box display="flex">
                {isThinnerThanLarge ? <SortByMobile /> : <SortBy />}
                <IconButton onClick={() => changeGridHandler(smallAmountGrid)} sx={{ borderRadius: 0 }}>
                    <GridViewIcon />
                </IconButton>
                <IconButton onClick={() => changeGridHandler(manyAmountGrid)} sx={{ borderRadius: 0 }}>
                    <GridOnIcon />
                </IconButton>
            </Box>
        </Grid>
    );
};

export default DevicesOperations;
