import React from "react";
import { Button, Drawer, Grid, useMediaQuery, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import FilterAccordion from "../ui/FilterAccordion";
import Devices from "../features/devices/Devices";

const Home = () => {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const isThinnerThanLarge = useMediaQuery(theme.breakpoints.down("lg"));

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} lg={2}>
                {!isThinnerThanLarge && <FilterAccordion />}
                {isThinnerThanLarge && (
                    <>
                        <Button onClick={toggleDrawer(true)}>Filter</Button>
                        <Drawer open={open} anchor="top" onClose={toggleDrawer(false)}>
                            <Button onClick={toggleDrawer(false)} sx={{ justifyContent: "flex-end" }}>
                                {/* <CloseIcon fontSize="large" /> */}
                                <CloseIcon sx={{ fontSize: 45 }} />
                            </Button>
                            <FilterAccordion />
                        </Drawer>
                    </>
                )}
            </Grid>
            {/* --- Devices List --- */}
            <Devices />
        </Grid>
    );
};

export default Home;
