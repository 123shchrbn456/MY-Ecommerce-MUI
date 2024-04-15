import * as React from "react";
import List from "@mui/material/List";
import { Button, Drawer, ListItemIcon, ListItemButton, ListItemText } from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
import CloseIcon from "@mui/icons-material/Close";

export default function SortByMobile({ sortOptions, sortItemClickHandler }) {
    const [openDrawer, setOpenDrawer] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const toggleDrawer = (newOpen) => () => setOpenDrawer(newOpen);

    const handleSortButtonClick = (index, sortValue) => {
        sortItemClickHandler(sortValue);
        toggleDrawer(false)();
        setSelectedIndex(index);
    };

    return (
        <>
            <ListItemButton onClick={toggleDrawer(true)} sx={{ width: "100px" }}>
                <ListItemIcon sx={{ minWidth: 36 }}>
                    <SortIcon />
                </ListItemIcon>
                <ListItemText primary={selectedIndex === 0 ? "Sort By:" : sortOptions[selectedIndex]["name"]} />
            </ListItemButton>
            <Drawer open={openDrawer} anchor="top" onClose={toggleDrawer(false)}>
                <Button onClick={toggleDrawer(false)} sx={{ justifyContent: "flex-end" }}>
                    <CloseIcon sx={{ fontSize: 45 }} />
                </Button>
                <List>
                    {sortOptions.map((sortOption, index) => (
                        <ListItemButton
                            // component={<Link />}
                            to=""
                            key={sortOption.name}
                            selected={index === selectedIndex}
                            onClick={() => handleSortButtonClick(index, sortOption.URLsortValue)}
                        >
                            <ListItemText primary={sortOption.name} />
                        </ListItemButton>
                    ))}
                </List>
            </Drawer>
        </>
    );
}
