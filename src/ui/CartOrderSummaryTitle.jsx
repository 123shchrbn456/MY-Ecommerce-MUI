import { Card, Grid, Typography } from "@mui/material";
import React from "react";

const CartOrderSummaryTitle = ({ isMobileBreakpoint }) => {
    return (
        <Grid item xs={12} lg={4}>
            <Card sx={{ p: 0, pt: 1 }}>
                <Typography component={isMobileBreakpoint ? "h6" : "h4"} variant={isMobileBreakpoint ? "h6" : "h4"} align="center" mb={1}>
                    Order Summary
                </Typography>
            </Card>
        </Grid>
    );
};

export default CartOrderSummaryTitle;
