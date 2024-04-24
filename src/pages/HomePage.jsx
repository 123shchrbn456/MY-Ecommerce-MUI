import React from "react";
import { Box, Card, CardActionArea, CardMedia, Grid, Typography, styled } from "@mui/material";
import DeviceItem from "../features/devices/DeviceItem";

import ipadBanner from "../images/ipad_banner.jpeg";
import iphoneBanner from "../images/iphone_banner.jpg";
import mackbookBanner from "../images/mackbook_banner.jpg";
import laptopsBanner from "../images/laptops_banner.jpg";
import { useGetDevicesFromFirebaseQuery } from "../features/devices/devicesSlice";

const CardCustomized = styled(Card)({
    "&:hover": {
        boxShadow: "0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12);",
        "& .MuiCardMedia-img": {
            transform: "scale(1.1)",
        },
    },
});

const DEVICE_GRID = { xs: 6, sm: 6, md: 6, lg: 3, xl: 3 };

const HomePage = () => {
    const {
        data = {},
        isLoading,
        isSuccess,
    } = useGetDevicesFromFirebaseQuery({
        uniqueSearchParamsObj: {},
        pageNum: 1,
        pageSize: 8,
        sortParam: null,
    });

    let popularFirstPartDevices = data.devices?.slice(0, data.devices?.length / 2);
    let popularSecondPartDevices = data.devices?.slice(data.devices?.length / 2);

    return (
        <Grid container spacing={2} pb={3}>
            <Grid item xs={12}>
                <Typography component="h1" variant="h2" align="center" fontWeight={500}>
                    Buy. Sell. Repair.
                </Typography>
                <Typography component="h5" variant="h5" align="center">
                    Smartphones, tablets and laptops at fair prices with warranty
                </Typography>
            </Grid>
            {/* Advertisement Card */}
            <Grid item xs={12} md={6}>
                <CardCustomized elevation={4} sx={{ p: 3, pb: 0 }}>
                    <CardActionArea className="my-card-action-area" to="/devices?category=tablets&brand=Apple&_page=1">
                        <Typography variant="button">Buy</Typography>
                        <Typography component="h3" variant="h3">
                            Apple iPad
                        </Typography>

                        <CardMedia
                            sx={{ height: { xs: 150, sm: 250 }, pt: 2, objectFit: "contain", transition: "transform .3s" }}
                            image={ipadBanner}
                            title="stuff"
                            component="img"
                        />
                    </CardActionArea>
                </CardCustomized>
            </Grid>
            {/* Advertisement Card */}
            <Grid item xs={12} md={6}>
                <CardCustomized elevation={2} sx={{ p: 3, pb: 0 }}>
                    <CardActionArea className="my-card-action-area" to="/devices?category=smartphones&brand=Apple&_page=1">
                        <Typography variant="button">Buy</Typography>
                        <Typography component="h3" variant="h3">
                            Apple iPhone
                        </Typography>
                        <CardMedia
                            sx={{ height: { xs: 150, sm: 250 }, pt: 2, objectFit: "contain", transition: "transform .3s" }}
                            image={iphoneBanner}
                            title="stuff"
                            component="img"
                        />
                    </CardActionArea>
                </CardCustomized>
            </Grid>
            {/* Popular items */}
            {!isLoading && popularFirstPartDevices.map((deviceData) => <DeviceItem grid={DEVICE_GRID} deviceData={deviceData} />)}
            {/* <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
                <CardCustomized elevation={2} sx={{ p: 2 }}>
                    <CardActionArea className="my-card-action-area" to="/devices/123">
                        <CardMedia
                            sx={{ height: { xs: 150, sm: 250 }, objectFit: "contain" }}
                            image={iphone15Img}
                            title="stuff"
                            component="img"
                        />
                    </CardActionArea>
                    <CardContent sx={{ p: 1, pb: 0 }}>
                        <LinkCustomized to="/devices/123">
                            <Typography component="h6" variant="subtitle1">
                                iPhone 14 128GB Red
                            </Typography>
                        </LinkCustomized>

                        <Typography component="h5" variant="h5">
                            900 $
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ p: 1, justifyContent: "space-between" }}>
                        <Button variant="contained">Buy</Button>
                        <div>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="add to commparison">
                                <BalanceIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                        </div>
                    </CardActions>
                </CardCustomized>
            </Grid> */}
            {/* Advertisement Card */}
            <Grid item xs={12} md={6}>
                <CardCustomized elevation={2} sx={{ p: 3 }}>
                    <CardActionArea className="my-card-action-area" to="/devices?category=laptops&brand=Apple&_page=1">
                        <Typography variant="button">Buy</Typography>
                        <Typography component="h3" variant="h3">
                            Apple MacBook
                        </Typography>
                        <CardMedia
                            sx={{ height: { xs: 150, sm: 250 }, pt: 2, objectFit: "contain", transition: "transform .3s" }}
                            image={mackbookBanner}
                            title="stuff"
                            component="img"
                        />
                    </CardActionArea>
                </CardCustomized>
            </Grid>
            {/* Advertisement Card */}
            <Grid item xs={12} md={6}>
                <CardCustomized elevation={2} sx={{ p: 3 }}>
                    <CardActionArea className="my-card-action-area" to="/devices?category=laptops&_page=1">
                        <Typography variant="button">Buy</Typography>
                        <Typography component="h3" variant="h3">
                            Laptops
                        </Typography>
                        <CardMedia
                            sx={{ height: { xs: 150, sm: 250 }, pt: 2, objectFit: "contain", transition: "transform .3s" }}
                            image={laptopsBanner}
                            title="stuff"
                            component="img"
                        />
                    </CardActionArea>
                </CardCustomized>
            </Grid>
            {/* Popular items */}
            {/* Popular items */}
            {!isLoading && popularSecondPartDevices.map((deviceData) => <DeviceItem grid={DEVICE_GRID} deviceData={deviceData} />)}
            {/* <Grid item xs={12}></Grid> */}
        </Grid>
    );
};

export default HomePage;
