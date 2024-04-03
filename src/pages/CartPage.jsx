import React from "react";
import {
    Box,
    Button,
    ButtonGroup,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Divider,
    Grid,
    IconButton,
    Link,
    Typography,
    styled,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";

import iphone15Img from "../images/iphone_15/iphone_15_pro_max_natural_titanium_pdp_image_position-1__ww-en_1.jpeg";

const BoxOrderSummary = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "8px 0px",
});

const CardAdaptive = styled(Card)(({ theme }) => ({
    padding: "16px",
    marginBottom: "8px",
    display: "flex",
    flexWrap: "wrap",
    [theme.breakpoints.up("sm")]: {
        flexWrap: "nowrap",
    },
}));

const CardContentImage = styled(CardContent)(({ theme }) => ({
    padding: 0,
    flexGrow: 1,
    flexBasis: "100%",
    [theme.breakpoints.up("sm")]: {
        flexBasis: "auto",
    },
}));

const CardContentInfo = styled(CardContent)(({ theme }) => ({
    padding: 0,
    flexGrow: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexBasis: "100%",
    [theme.breakpoints.up("sm")]: {
        flexBasis: "auto",
        alignItems: "flex-start",
    },
}));

const LinkTitle = styled(Link)(({ theme }) => ({
    fontWeight: 600,
    margin: "8px 0px",
    fontSize: 18,
    [theme.breakpoints.up("sm")]: {
        fontSize: 22,
    },
}));

const CardContentPriceAndCounter = styled(CardContent)(({ theme }) => ({
    padding: 0,
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    "&:last-child": {
        paddingBottom: 0,
    },
    [theme.breakpoints.up("sm")]: {
        flexDirection: "column",
        justifyContent: "space-between",
    },
}));

const CartPage = () => {
    const theme = useTheme();
    const isMobileBreakpoint = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Grid container spacing={1} mt={-2}>
            <Grid className="cart-items" item xs={12} lg={8}>
                {/* ------------------ FIRST CARD START ------------------ */}
                <CardAdaptive>
                    {/*  */}
                    <CardContentImage>
                        <CardActionArea className="my-card-action-area" to="/devices/123">
                            <CardMedia sx={{ height: 100, objectFit: "contain" }} image={iphone15Img} title="stuff" component="img" />
                        </CardActionArea>
                    </CardContentImage>
                    {/*  */}
                    <CardContentInfo>
                        <LinkTitle to="/devices/123">iPhone 14 128GB Red</LinkTitle>
                        <Typography component="p" variant="body2" color="gray" align="center" sx={{ fontSize: 11 }}>
                            Quickfind Code: 1828880
                        </Typography>
                        <Button
                            variant="text"
                            sx={{ textTransform: "none", paddingLeft: 0 }}
                            size={isMobileBreakpoint ? "small" : "large"}
                            startIcon={<DeleteIcon />}
                        >
                            Delete item
                        </Button>
                    </CardContentInfo>
                    {/*  */}
                    <CardContentPriceAndCounter>
                        <Typography component={isMobileBreakpoint ? "h6" : "h5"} variant={isMobileBreakpoint ? "h6" : "h5"}>
                            900 $
                        </Typography>
                        <ButtonGroup variant="outlined" aria-label="Basic button group" size="small">
                            <Button>-</Button>
                            <Button disableRipple sx={{ p: "1px", "&:hover": { backgroundColor: "transparent" }, width: "40px" }}>
                                <input
                                    style={{ width: "100%", height: "100%", textAlign: "center" }}
                                    className="my-input-number"
                                    type="number"
                                    defaultValue={1}
                                    min="1"
                                    max="99"
                                />
                            </Button>
                            <Button>+</Button>
                        </ButtonGroup>
                    </CardContentPriceAndCounter>
                </CardAdaptive>
                {/* ------------------ SECOND CARD START ------------------ */}
                <CardAdaptive>
                    {/*  */}
                    <CardContentImage>
                        <CardActionArea className="my-card-action-area" to="/devices/123">
                            <CardMedia sx={{ height: 100, objectFit: "contain" }} image={iphone15Img} title="stuff" component="img" />
                        </CardActionArea>
                    </CardContentImage>
                    {/*  */}
                    <CardContentInfo>
                        <LinkTitle to="/devices/123">iPhone 14 128GB Red</LinkTitle>
                        <Typography component="p" variant="body2" color="gray" align="center" sx={{ fontSize: 11 }}>
                            Quickfind Code: 1828880
                        </Typography>
                        <Button
                            variant="text"
                            sx={{ textTransform: "none", paddingLeft: 0 }}
                            size={isMobileBreakpoint ? "small" : "large"}
                            startIcon={<DeleteIcon />}
                        >
                            Delete item
                        </Button>
                    </CardContentInfo>
                    {/*  */}
                    <CardContentPriceAndCounter>
                        <Typography component={isMobileBreakpoint ? "h6" : "h5"} variant={isMobileBreakpoint ? "h6" : "h5"}>
                            900 $
                        </Typography>
                        <ButtonGroup variant="outlined" aria-label="Basic button group" size="small">
                            <Button>-</Button>
                            <Button disableRipple sx={{ p: "1px", "&:hover": { backgroundColor: "transparent" }, width: "40px" }}>
                                <input
                                    style={{ width: "100%", height: "100%", textAlign: "center" }}
                                    className="my-input-number"
                                    type="number"
                                    defaultValue={1}
                                    min="1"
                                    max="99"
                                />
                            </Button>
                            <Button>+</Button>
                        </ButtonGroup>
                    </CardContentPriceAndCounter>
                </CardAdaptive>
            </Grid>
            {/* ---Order Summary--- */}
            <Grid item xs={12} lg={4}>
                <Card sx={{ p: 2 }}>
                    <Typography
                        component={isMobileBreakpoint ? "h6" : "h4"}
                        variant={isMobileBreakpoint ? "h6" : "h4"}
                        align="center"
                        mb={1}
                    >
                        Order Summary
                    </Typography>
                    <BoxOrderSummary>
                        <Typography component="h6" variant={isMobileBreakpoint ? "subtitle1" : "h6"} fontWeight={500}>
                            Product total:
                        </Typography>
                        <Typography component="h6" variant={isMobileBreakpoint ? "subtitle1" : "h6"} fontWeight={500}>
                            1200$
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
                            1200$
                        </Typography>
                    </BoxOrderSummary>
                    <Button variant="contained" fullWidth>
                        Checkout
                    </Button>
                </Card>
            </Grid>
        </Grid>
    );
};

export default CartPage;
