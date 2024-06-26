import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ImageGallery from "react-image-gallery";
import {
    Breadcrumbs,
    Button,
    ButtonGroup,
    Card,
    CardContent,
    Grid,
    IconButton,
    Link,
    Stack,
    Typography,
    styled,
    useMediaQuery,
    useTheme,
} from "@mui/material";

import { useGetSingleDeviceFromFirebaseQuery } from "../features/devices/devicesSlice";
import { useParams } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import BalanceIcon from "@mui/icons-material/Balance";
import "react-image-gallery/styles/css/image-gallery.css";
import { addToCart } from "../features/cart/cartSlice";
import ModalAlert from "../ui/ModalAlert";

const RoundButton = styled(Button)(({ back }) => ({
    borderRadius: "50%",
    minWidth: "50px",
    width: "50px",
    height: "50px",
    padding: 0,
    marginRight: "8px",
    opacity: 0.9,
    backgroundColor: back,
    "&:hover": {
        border: "3px solid #BDBDBD",
        opacity: 1,
        backgroundColor: back,
    },
}));

const CardContentCustomized = styled(CardContent)(({ theme, needmobilechange = "true" }) => ({
    display: "flex",
    flexDirection: "row",
    // flexDirection: "column", mobile
    alignItems: "center",
    backgroundColor: "white",
    padding: 8,
    // paddingBottom: 0,
    "&:last-child": {
        padding: 8,
    },
    [theme.breakpoints.down("sm")]: {
        flexDirection: needmobilechange === "true" ? "column" : "row",
    },
}));

const SingleDevicePage = () => {
    const [openAlertModal, setOpenAlertModal] = useState(false);
    const theme = useTheme();
    const dispatch = useDispatch();
    const { id } = useParams();

    const isThinnerThanLarge = useMediaQuery(theme.breakpoints.down("lg"));
    const { data = {}, isLoading } = useGetSingleDeviceFromFirebaseQuery(id);

    if (isLoading) return <h3>Loading Single Device</h3>;

    console.log(data);

    const { category, brand, series, device_name, memory, color, avatar_img, device_imgs, price } = data;
    const images = device_imgs.map((imgURL) => ({ original: imgURL, thumbnail: imgURL }));

    console.log("SingleDevicePage", data);

    const onBuyClick = () => {
        const name = brand + " " + device_name;
        dispatch(addToCart({ name: name, id, storage: memory, img: avatar_img, color, price }));
    };

    const handleOpenAlertModal = () => {
        setOpenAlertModal(true);
    };

    const handleCloseAlertModal = () => {
        setOpenAlertModal(false);
    };

    return (
        <Grid container spacing={1} mt={-2} pb={3}>
            {/* ---Breadcrumb start--- */}
            <Grid item xs={12}>
                <Stack>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" to={`/devices?category=${category}&_page=1`}>
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </Link>
                        <Link underline="hover" color="inherit" to={`/devices?category=${category}&brand=${brand}&_page=1`}>
                            {brand}
                        </Link>
                        <Link
                            underline="hover"
                            color="inherit"
                            to={`/devices?category=${category}&brand=${brand}&series=${series}&_page=1`}
                        >
                            {series} series
                        </Link>
                        <Typography color="text.primary">
                            {/* {model} {storage} {color} */}
                            {device_name} {memory} {color}
                        </Typography>
                    </Breadcrumbs>
                </Stack>
            </Grid>
            {/* ---Breadcrumb finish--- */}
            <Grid item xs={12} lg={5}>
                {isThinnerThanLarge && (
                    <Card elevation={2} sx={{ p: 1, pl: 3, pr: 3, mb: 1 }} square={true}>
                        <CardContentCustomized>
                            <Typography component="h4" variant="h4">
                                {/* {model} {storage} {color} */}
                                {device_name} {memory} {color}
                                {/* iPhone 14 128GB Red */}
                            </Typography>
                        </CardContentCustomized>
                    </Card>
                )}
                <Card elevation={2} sx={{ p: 2, height: "450px" }} square={true}>
                    <ImageGallery
                        items={images}
                        showNav={true}
                        showPlayButton={false}
                        showFullscreenButton={true}
                        useBrowserFullscreen={false}
                        showThumbnails={true}
                    />
                </Card>
            </Grid>
            <Grid item container xs={12} lg={7}>
                <Grid item xs={12}>
                    {!isThinnerThanLarge && (
                        <Card elevation={2} sx={{ p: 1, pl: 3, pr: 3, mb: 1 }} square={true}>
                            <CardContentCustomized>
                                <Typography component="h4" variant="h4">
                                    {/* {model} {storage} {color} */}
                                    {device_name} {memory} {color}
                                </Typography>
                            </CardContentCustomized>
                        </Card>
                    )}
                    <Card elevation={2} sx={{ p: 1, pl: 3, pr: 3, mb: 1 }} square={true}>
                        <CardContentCustomized>
                            <Typography component="h6" variant="h6" sx={{ mr: 2 }}>
                                Storage options:
                            </Typography>
                            <ButtonGroup variant="outlined" aria-label="Basic button group" onClick={handleOpenAlertModal}>
                                <Button>256GB</Button>
                                <Button>512GB</Button>
                                <Button>1024GB</Button>
                            </ButtonGroup>
                        </CardContentCustomized>
                    </Card>
                    <Card elevation={2} sx={{ p: 1, pl: 3, pr: 3, mb: 1 }} square={true}>
                        <CardContentCustomized>
                            <Typography component="h6" variant="h6" sx={{ mr: 2 }}>
                                Colors:
                            </Typography>
                            <div>
                                <RoundButton back="red" onClick={handleOpenAlertModal}></RoundButton>
                                <RoundButton back="black" onClick={handleOpenAlertModal}></RoundButton>
                                <RoundButton back="yellow" onClick={handleOpenAlertModal}></RoundButton>
                            </div>
                        </CardContentCustomized>
                    </Card>
                    <Card elevation={2} sx={{ p: 1, pl: 3, pr: 3, mb: 1 }} square={true}>
                        <CardContentCustomized needmobilechange="false" sx={{ justifyContent: "space-between", gap: 1 }}>
                            <Typography component="h4" variant="h4">
                                {price} $
                            </Typography>

                            <div>
                                <IconButton aria-label="add to favorites" size="large" onClick={handleOpenAlertModal}>
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="add to commparison" size="large" onClick={handleOpenAlertModal}>
                                    <BalanceIcon />
                                </IconButton>
                                <IconButton aria-label="share" size="large" onClick={handleOpenAlertModal}>
                                    <ShareIcon />
                                </IconButton>
                            </div>
                        </CardContentCustomized>
                        {/* <CardActions sx={{ p: 1, justifyContent: "flex-start" }}>
                            <Button variant="contained">Buy</Button>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                        </CardActions> */}
                    </Card>
                    <Card elevation={0}>
                        <Button variant="contained" size="large" sx={{ width: "100%" }} onClick={onBuyClick}>
                            Add to Cart
                        </Button>
                    </Card>
                </Grid>
            </Grid>
            <ModalAlert openAlertModal={openAlertModal} handleCloseAlertModal={handleCloseAlertModal} />
        </Grid>
    );
};

export default SingleDevicePage;
