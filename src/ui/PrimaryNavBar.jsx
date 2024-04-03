import * as React from "react";
import {
    AppBar,
    Box,
    Button,
    Toolbar,
    IconButton,
    Typography,
    InputBase,
    Badge,
    Menu,
    MenuItem,
    Container,
    Link,
    Avatar,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import companyLogo from "../images/logo-Meta-removebg-preview.png";

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    width: "50%",
    [theme.breakpoints.down("sm")]: {
        width: "100%",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
    },
}));

const PrimaryNavBar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const menuId = "primary-search-account-menu";
    const renderProfileMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "left",
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>
                <Link to="/profile">Profile</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Link to="/my-orders">My Orders</Link>
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Container maxWidth="xxl">
                    <Toolbar disableGutters={true} sx={{ justifyContent: "space-between" }}>
                        <Box sx={{ display: { xs: "none", md: "block" } }}>
                            <Link to="/">
                                <img src={companyLogo} alt="" style={{ height: "40px" }} />
                            </Link>
                        </Box>
                        <Search>
                            <SearchIconWrapper size="large">
                                <SearchIcon size="large" />
                            </SearchIconWrapper>
                            <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
                        </Search>
                        <Box sx={{ display: "flex" }}>
                            <Button
                                size="large"
                                color="inherit"
                                sx={{
                                    textTransform: "none",
                                    mr: 1,
                                }}
                                to="/cart"
                            >
                                <Typography variant="h6" mr={1}>
                                    Cart
                                </Typography>
                                <Badge badgeContent={4} color="error">
                                    <ShoppingCartIcon sx={{ fontSize: "30px" }} />
                                </Badge>
                            </Button>
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                                sx={{
                                    p: 1,
                                }}
                            >
                                <Avatar alt="Remy Sharp" src="/avatar.jpg" sx={{ width: "50px", height: "50px" }} />
                            </IconButton>
                            {renderProfileMenu}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
};

export default PrimaryNavBar;
