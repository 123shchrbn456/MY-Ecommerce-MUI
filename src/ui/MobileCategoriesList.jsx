import { Box, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, styled } from "@mui/material";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import TabletMacIcon from "@mui/icons-material/TabletMac";
import LaptopIcon from "@mui/icons-material/Laptop";
import React from "react";

const CustomizedListItem = styled(ListItem)({
    display: "inline-flex",
    width: "25%",
});

const CustomizedLink2 = styled(Link)({
    display: "inline-flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 0px",
    // margin: { xs: 0, sm: 0, md: "0 30px", lg: "0 30px" },
    margin: { md: "20px" },
    // margin: "30px",
});

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
            <CustomizedLink to="/smartphones">
                <SmartphoneIcon fontSize="large" />
                <Typography variant="subtitle1">Smartphones</Typography>
            </CustomizedLink>
            <CustomizedLink to="/tablets">
                <TabletMacIcon fontSize="large" />
                <Typography variant="subtitle1">Tablets</Typography>
            </CustomizedLink>
            <CustomizedLink to="/laptops">
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
