import * as React from "react";
import { List, ListItemButton, ListItemText, ListItemIcon, Menu, MenuItem } from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";

export default function SortBy({ sortOptions, sortItemClickHandler }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleSortItemClick = (index, sortValue) => {
        sortItemClickHandler(sortValue);
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <List component="nav" aria-label="Device settings" /* sx={{ bgcolor: "background.paper" }} */>
                <ListItemButton
                    id="lock-button"
                    aria-haspopup="listbox"
                    aria-controls="lock-menu"
                    aria-label="Sort By:"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClickListItem}
                >
                    <ListItemIcon sx={{ minWidth: 36 }}>
                        <SortIcon />
                    </ListItemIcon>
                    <ListItemText primary={selectedIndex === 0 ? "Sort By:" : sortOptions[selectedIndex]["name"]} />
                </ListItemButton>
            </List>
            <Menu
                id="lock-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "lock-button",
                    role: "listbox",
                }}
            >
                {sortOptions.map((option, index) => (
                    <MenuItem
                        key={option.name}
                        selected={index === selectedIndex}
                        onClick={() => handleSortItemClick(index, option.URLsortValue)}
                    >
                        {option.name}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
}
