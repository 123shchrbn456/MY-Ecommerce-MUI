import React from "react";
import { Button, Drawer, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FilterAccordion from "./FilterAccordions";

const FilterMobileAccordionsModal = () => {
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    return (
        <>
            <Button
                startIcon={<FilterAltIcon sx={{ width: 22, height: 24 }} />}
                onClick={toggleDrawer(true)}
                sx={{ textTransform: "none" }}
            >
                <Typography variant="h6" fontWeight={400}>
                    Filter
                </Typography>
            </Button>
            <Drawer open={open} anchor="top" onClose={toggleDrawer(false)}>
                <Button onClick={toggleDrawer(false)} sx={{ justifyContent: "flex-end" }}>
                    <CloseIcon sx={{ fontSize: 45 }} />
                </Button>
                <FilterAccordion />
            </Drawer>
        </>
    );
};

export default FilterMobileAccordionsModal;
