import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
    AppBar,
    Box,
    Button,
    Toolbar,
    IconButton,
    InputBase,
    Badge,
    Menu,
    MenuItem,
    Container,
    Link,
    Avatar,
    Typography,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";

// import companyLogo from "../images/logo-Meta-removebg-preview.png";
import companyLogo from "../images/logo-no-background.png";
import { getTotalPriceAndQuantity, selectAllCartItems, selectCartTotalQuantity } from "../features/cart/cartSlice";
import ModalAlert from "./ModalAlert";

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    width: "40%",
    [theme.breakpoints.down("sm")]: {
        width: "100%",
        marginTop: 8,
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
    width: "100%",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        // width: "100%",
    },
}));

const PrimaryNavBar = () => {
    const [openAlertModal, setOpenAlertModal] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const auth = getAuth();
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }
        });
    }, [auth]);

    const isMenuOpen = Boolean(anchorEl);

    const cartItems = useSelector(selectAllCartItems);
    const cartTotalQuantity = useSelector(selectCartTotalQuantity);

    useEffect(() => {
        dispatch(getTotalPriceAndQuantity());
    }, [cartItems]);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleSignOut = (e) => {
        e.preventDefault();
        console.log("Sign out is successful");
        auth.signOut();
        // navigate("/devices?category=smartphones&_page=1");
    };

    const handleOpenAlertModal = () => {
        setOpenAlertModal(true);
    };

    const handleCloseAlertModal = () => {
        setOpenAlertModal(false);
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
                <Link to="/my-orders">My Orders</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Link to="" onClick={handleSignOut}>
                    Sign out
                </Link>
            </MenuItem>
        </Menu>
    );

    return (
        <Box>
            <AppBar position="static">
                <Container maxWidth="xxl">
                    <Toolbar disableGutters={true} sx={{ justifyContent: "space-between", flexWrap: { xs: "wrap", sm: "no-wrap" } }}>
                        <Box sx={{ display: { xs: "none", md: "block" } }}>
                            <Link to="/">
                                <img src={companyLogo} alt="" style={{ height: "50px" }} />
                                {/* <Typography variant="h3" color="secondary">
                                    Devices store
                                </Typography> */}
                            </Link>
                        </Box>
                        <Search>
                            <SearchIconWrapper size="large">
                                <SearchIcon size="large" />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ "aria-label": "search" }}
                                onChange={handleOpenAlertModal}
                            />
                        </Search>
                        <Box
                            sx={{
                                display: "flex",
                                width: { xs: "100%", sm: "auto" },
                                justifyContent: { xs: "space-evenly", sm: "flex-start" },
                            }}
                        >
                            <Button
                                color="inherit"
                                sx={{
                                    textTransform: "none",
                                    mr: 2,
                                    fontSize: "1.2rem",
                                }}
                                endIcon={
                                    //
                                    <Badge badgeContent={cartTotalQuantity} color="error">
                                        <ShoppingCartIcon fontSize="medium" />
                                    </Badge>
                                }
                                to="/cart"
                            >
                                Cart
                            </Button>
                            {isAuthenticated ? (
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
                            ) : (
                                <Button
                                    size="large"
                                    color="inherit"
                                    sx={{
                                        textTransform: "none",
                                        mr: 1,
                                        fontSize: "1.2rem",
                                    }}
                                    endIcon={<LoginIcon fontSize="medium" />}
                                    to="/sign-in"
                                >
                                    Sign In
                                </Button>
                            )}

                            {renderProfileMenu}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <ModalAlert openAlertModal={openAlertModal} handleCloseAlertModal={handleCloseAlertModal} />
        </Box>
    );
};

export default PrimaryNavBar;
