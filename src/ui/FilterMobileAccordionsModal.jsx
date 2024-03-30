import React from "react";
import { Button, Drawer, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FilterAccordions from "./FilterAccordions";

const FilterMobileAccordionsModal = () => {
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    return (
        <>
            <Button
                startIcon={<FilterAltIcon sx={{ width: 22, height: 24 }} />}
                sx={{ textTransform: "none" }}
                onClick={toggleDrawer(true)}
            >
                <Typography variant="h6" fontWeight={400}>
                    Filter
                </Typography>
            </Button>
            <Drawer open={open} anchor="top" onClose={toggleDrawer(false)}>
                <Button onClick={toggleDrawer(false)} sx={{ justifyContent: "flex-end" }}>
                    <CloseIcon sx={{ fontSize: 45 }} />
                </Button>
                <FilterAccordions />
            </Drawer>
        </>
    );
};

export default FilterMobileAccordionsModal;
