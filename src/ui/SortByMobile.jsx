import * as React from "react";
import List from "@mui/material/List";
import { Button, Drawer, Link, ListItem, ListItemIcon, ListItemButton, ListItemText } from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
import CloseIcon from "@mui/icons-material/Close";

const options = ["Default", "Price: Low to High", "Price: High to Low", "Title: A - Z", "Title: Z - A"];

export default function SortByMobile() {
    const [openDrawer, setOpenDrawer] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const toggleDrawer = (newOpen) => () => setOpenDrawer(newOpen);

    // const open = Boolean(anchorEl);
    const handleClickListItem = (e) => {};

    const handleMenuItemClick = (e, index) => {
        setSelectedIndex(index);
    };

    const handleClose = () => {};

    return (
        <>
            <ListItemButton onClick={toggleDrawer(true)} sx={{ width: "100px" }}>
                <ListItemIcon sx={{ minWidth: 36 }}>
                    <SortIcon />
                </ListItemIcon>
                <ListItemText primary={selectedIndex === 0 ? "Sort By:" : options[selectedIndex]} />
                {/* <ListItemText primary="Sort By:" /> */}
            </ListItemButton>
            <Drawer open={openDrawer} anchor="top" onClose={toggleDrawer(false)}>
                <Button onClick={toggleDrawer(false)} sx={{ justifyContent: "flex-end" }}>
                    <CloseIcon sx={{ fontSize: 45 }} />
                </Button>
                <List>
                    {options.map((text, index) => (
                        <ListItemButton
                            // component={<Link />}
                            to={`?${text}${index}`}
                            key={text}
                            selected={index === selectedIndex}
                            onClick={() => {
                                toggleDrawer(false)();
                                setSelectedIndex(index);
                            }}
                        >
                            {/* {text} */}
                            {/* <ListItemIcon>
                                    <InboxIcon />
                            </ListItemIcon> */}
                            <ListItemText primary={text} />
                        </ListItemButton>
                    ))}
                </List>
                {/* <FilterAccordions /> */}
            </Drawer>
        </>
    );
}
