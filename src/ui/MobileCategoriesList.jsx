import { Box, Link, Typography, styled } from "@mui/material";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import TabletMacIcon from "@mui/icons-material/TabletMac";
import LaptopIcon from "@mui/icons-material/Laptop";
import React from "react";

const CustomizedLink = styled(Link)(({ theme }) => ({
    display: "inline-flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 15px",
    [theme.breakpoints.up("sm")]: {
        margin: "0 30px",
    },
}));

const MobileCategoriesList = () => {
    return (
        // <List>
        <Box>
            <CustomizedLink to="/devices?category=smartphones&_page=1">
                <SmartphoneIcon fontSize="large" />
                <Typography variant="subtitle1">Smartphones</Typography>
            </CustomizedLink>
            <CustomizedLink to="/devices?category=tablets&_page=1">
                <TabletMacIcon fontSize="large" />
                <Typography variant="subtitle1">Tablets</Typography>
            </CustomizedLink>
            <CustomizedLink to="/devices?category=laptops&_page=1">
                <LaptopIcon fontSize="large" />
                <Typography variant="subtitle1">Laptops</Typography>
            </CustomizedLink>
            {/* <CustomizedListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <SmartphoneIcon />
                    </ListItemIcon>
                    <ListItemText primary="Smartphones" />
                </ListItemButton>
            </CustomizedListItem>
            <CustomizedListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <TabletMacIcon />
                    </ListItemIcon>
                    <ListItemText primary="Tablets" />
                </ListItemButton>
            </CustomizedListItem>
            <CustomizedListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <LaptopIcon />
                    </ListItemIcon>
                    <ListItemText primary="Laptops" />
                </ListItemButton>
            </CustomizedListItem> */}
            {/* <FormControlLabel
                        value="bottom"
                        control={<Checkbox />}
                        label="Bottom"
                        labelPlacement="bottom"
                    /> */}
        </Box>
        // </List>
    );
};

export default MobileCategoriesList;
