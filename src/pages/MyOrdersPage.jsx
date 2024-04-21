import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetUserOrdersQuery } from "../features/cart/cartSlice";

import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    IconButton,
    Link,
    Typography,
    Stack,
    styled,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import LoadingSkeletons from "../ui/LoadingSkeletons";

const CardAdaptive = styled(Card)(({ theme }) => ({
    padding: "8px",
    marginBottom: "8px",
    display: "flex",
    flexWrap: "no-wrap",
    [theme.breakpoints.up("sm")]: {
        padding: "16px",
    },
}));

const CardContentImage = styled(CardContent)({
    padding: 0,
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
});

const CardContentInfo = styled(CardContent)({
    padding: 0,
    flexGrow: 4,
    display: "flex",
    alignItems: "center",
});

const LinkTitle = styled(Link)(({ theme }) => ({
    fontWeight: 600,
    margin: "8px 0px",
    fontSize: 16,
    [theme.breakpoints.up("sm")]: {
        fontSize: 22,
    },
}));

const CardContentPriceAndCounter = styled(CardContent)({
    padding: 0,
    flexGrow: 1,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    "&:last-child": {
        paddingBottom: 0,
    },
});

const MyOrdersPage = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const isMobileBreakpoint = useMediaQuery(theme.breakpoints.down("sm"));

    const { data: orders, isLoading } = useGetUserOrdersQuery();
    console.log("orders", orders);

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
                {!isLoading &&
                    orders.map((order) => (
                        <Accordion defaultExpanded={false} disableGutters={true} sx={{ bgcolor: "#C0C0C0" }} key={order.id}>
                            <AccordionSummary
                                expandIcon={<ArrowDownwardIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                                sx={{
                                    p: 1,
                                    "& .MuiAccordionSummary-content": {
                                        p: { xs: "0", sm: "0px 16px" },
                                        gap: { xs: 1, sm: 4 },
                                        alignItems: "center",
                                    },
                                    "& .MuiAccordionSummary-expandIconWrapper": { padding: { xs: "0", sm: "0px 8px" } },
                                }}
                            >
                                <Typography
                                    variant={isMobileBreakpoint ? "body2" : "h6"}
                                    fontWeight={400}
                                    fontSize={isMobileBreakpoint && "0.8rem"}
                                >
                                    № {order.timestamp}
                                </Typography>
                                <Typography
                                    variant={isMobileBreakpoint ? "body2" : "h6"}
                                    fontWeight={400}
                                    fontSize={isMobileBreakpoint && "0.8rem"}
                                >
                                    11.03.2024
                                </Typography>
                                <Typography
                                    variant={isMobileBreakpoint ? "body2" : "h6"}
                                    fontWeight={400}
                                    fontSize={isMobileBreakpoint && "0.8rem"}
                                >
                                    Delivered
                                </Typography>
                                <Typography
                                    variant={isMobileBreakpoint ? "body2" : "h6"}
                                    fontWeight={400}
                                    fontSize={isMobileBreakpoint && "0.8rem"}
                                >
                                    {order.cartTotalAmount}$
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ p: { xs: "0px 8px 12px", sm: "0px 16px 12px" } }}>
                                {/* CardAdaptive First */}
                                {order.cartItems.map((cartItem) => (
                                    <CardAdaptive key={cartItem.id}>
                                        {/*  */}
                                        <CardContentImage>
                                            <CardActionArea className="my-card-action-area" to="/devices/123">
                                                <CardMedia
                                                    sx={{ height: 50, objectFit: "contain", width: "auto" }}
                                                    image={cartItem.img}
                                                    title="stuff"
                                                    component="img"
                                                />
                                            </CardActionArea>
                                        </CardContentImage>
                                        {/*  */}

                                        <CardContentInfo>
                                            <LinkTitle to="/devices/123" sx={{ fontWeight: 300 }}>
                                                {cartItem.name} {cartItem.storage}
                                            </LinkTitle>
                                        </CardContentInfo>
                                        {/*  */}
                                        <CardContentPriceAndCounter>
                                            <Typography component="h6" variant={isMobileBreakpoint ? "subtitle1" : "h6"}>
                                                {cartItem.price} $
                                            </Typography>
                                        </CardContentPriceAndCounter>
                                    </CardAdaptive>
                                ))}
                            </AccordionDetails>
                        </Accordion>
                    ))}
            </Grid>
        </Grid>
    );
};

export default MyOrdersPage;
