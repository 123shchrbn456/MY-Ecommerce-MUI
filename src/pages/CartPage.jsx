import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItem from "../features/cart/CartItem";
import {
    clearCartItems,
    getTotalPriceAndQuantity,
    selectAllCartItems,
    selectCartTotalAmount,
    selectCartTotalQuantity,
    useAddNewOrderToFirebaseMutation,
} from "../features/cart/cartSlice";

import { Box, Button, Card, Divider, Grid, IconButton, Typography, Stack, styled, useMediaQuery, useTheme } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CartOrderSummaryTitle from "../ui/CartOrderSummaryTitle";

const BoxOrderSummary = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "8px 0px",
});

const CartPage = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isMobileBreakpoint = useMediaQuery(theme.breakpoints.down("sm"));
    const isTabletBreakpoint = useMediaQuery(theme.breakpoints.down("lg"));

    const cartItems = useSelector(selectAllCartItems);
    const cartTotalQuantity = useSelector(selectCartTotalQuantity);
    const cartTotalAmount = useSelector(selectCartTotalAmount);

    const [addNewOrder, { isLoading, isError }] = useAddNewOrderToFirebaseMutation();

    useEffect(() => {
        dispatch(getTotalPriceAndQuantity());
    }, [cartItems]);

    const backButtonClickHandler = () => navigate(-1);

    const submitCartHandler = async () => {
        const orderData = {
            cartItems,
            cartTotalQuantity,
            cartTotalAmount,
        };
        await addNewOrder(orderData);
        dispatch(clearCartItems());
        console.log(isError);
    };

    return (
        <Grid container spacing={1} mt={-2} pb={3}>
            <Grid item xs={12} lg={8}>
                <Stack direction="row" alignItems="center" spacing={2}>
                    <IconButton onClick={backButtonClickHandler}>
                        <ArrowBackIcon fontSize="large" />
                    </IconButton>
                    <Typography variant="h4">Cart</Typography>
                    <Typography variant="subtitle1">{cartTotalQuantity} items</Typography>
                </Stack>
            </Grid>
            {!isTabletBreakpoint && <CartOrderSummaryTitle isMobileBreakpoint={isMobileBreakpoint} />}

            <Grid className="cart-items" item xs={12} lg={8}>
                {cartItems.length === 0 && (
                    <Typography variant="h3" align="center">
                        Your Cart is empty
                    </Typography>
                )}
                {cartItems.length > 0 && cartItems.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem} />)}
            </Grid>
            {isTabletBreakpoint && <CartOrderSummaryTitle isMobileBreakpoint={isMobileBreakpoint} />}
            {/* {!isMobileBreakpoint && <CartOrderSummary isMobileBreakpoint={isMobileBreakpoint} />} */}
            {/* ---Order Summary--- */}

            <Grid item xs={12} lg={4}>
                <Card sx={{ p: 2, pt: 1 }}>
                    <BoxOrderSummary>
                        <Typography component="h6" variant={isMobileBreakpoint ? "subtitle1" : "h6"} fontWeight={500}>
                            Product total:
                        </Typography>
                        <Typography component="h6" variant={isMobileBreakpoint ? "subtitle1" : "h6"} fontWeight={500}>
                            {cartTotalAmount} $
                        </Typography>
                    </BoxOrderSummary>
                    <BoxOrderSummary>
                        <Typography component="h6" variant={isMobileBreakpoint ? "subtitle1" : "h6"} fontWeight={500}>
                            Shipping:
                        </Typography>
                        <Typography component="h6" variant={isMobileBreakpoint ? "subtitle1" : "h6"} fontWeight={500} color="error">
                            Free
                        </Typography>
                    </BoxOrderSummary>
                    <Divider />
                    <BoxOrderSummary>
                        <Typography component="h6" variant={isMobileBreakpoint ? "subtitle1" : "h6"} fontWeight={500}>
                            Total:
                        </Typography>
                        <Typography component="h6" variant={isMobileBreakpoint ? "subtitle1" : "h6"} fontWeight={500}>
                            {cartTotalAmount} $
                        </Typography>
                    </BoxOrderSummary>
                    <Button variant="contained" fullWidth onClick={submitCartHandler}>
                        Checkout
                    </Button>
                </Card>
            </Grid>
        </Grid>
    );
};

export default CartPage;
