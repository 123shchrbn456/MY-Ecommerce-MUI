import React from "react";
import { Grid, useMediaQuery, useTheme } from "@mui/material";

import FilterAccordions from "../ui/FilterAccordions";
import Devices from "../features/devices/Devices";

const DevicesPage = () => {
    const theme = useTheme();
    const isThinnerThanLarge = useMediaQuery(theme.breakpoints.down("lg"));

    return (
        <Grid container spacing={2}>
            {!isThinnerThanLarge && <FilterAccordions />}
            {/* --- Devices List --- */}
            <Devices />
        </Grid>
    );
};

export default DevicesPage;
