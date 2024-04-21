import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetUserOrdersQuery } from "../features/cart/cartSlice";

import { Grid, IconButton, Typography, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LoadingSkeletons from "../ui/LoadingSkeletons";
import MySingleOrder from "../features/authentication/MySingleOrder";

const MyOrdersPage = () => {
    const navigate = useNavigate();

    const { data: orders, isLoading, isFetching, isSuccess, isUninitialized } = useGetUserOrdersQuery();
    console.log("orders", orders);
    console.log("isLoading", isLoading);
    console.log("isFetching", isFetching);
    console.log("isSuccess", isSuccess);
    console.log("isUninitialized", isUninitialized);
    console.log("------------------------------------------------------------");

    const backButtonClickHandler = () => navigate(-1);

    return (
        <Grid container spacing={1} mt={-2} pb={3}>
            <Grid item xs={12}>
                <Stack direction="row" alignItems="center" spacing={2}>
                    <IconButton onClick={backButtonClickHandler}>
                        <ArrowBackIcon fontSize="large" />
                    </IconButton>
                    <Typography variant="h4">My Orders</Typography>
                </Stack>
            </Grid>
            <Grid className="cart-items" item xs={12}>
                {isLoading && <LoadingSkeletons needsGridContainer={false} skeletonAmount={2} />}
                {!isLoading && isSuccess && orders.map((order) => <MySingleOrder key={order.id} order={order} />)}
            </Grid>
        </Grid>
    );
};

export default MyOrdersPage;
