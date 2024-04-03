import React from "react";
import {
    Breadcrumbs,
    Button,
    ButtonGroup,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    IconButton,
    Link,
    Paper,
    Stack,
    Typography,
    styled,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import ImageGallery from "react-image-gallery";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import BalanceIcon from "@mui/icons-material/Balance";
import "react-image-gallery/styles/css/image-gallery.css";

import img from "../images/iphone_15/iphone_15_pro_max_natural_titanium_pdp_image_position-1__ww-en_1.jpeg";
import img1 from "../images/iphone_15/iphone_15_pro_max_natural_titanium_pdp_image_position-1__ww-en_1.jpeg";
import img2 from "../images/iphone_15/iphone_15_pro_max_natural_titanium_pdp_image_position-1_alt__ww-en_1.jpeg";
import img3 from "../images/iphone_15/iphone_15_pro_max_natural_titanium_pdp_image_position-2__ww-en_1.jpeg";
import img4 from "../images/iphone_15/iphone_15_pro_max_natural_titanium_pdp_image_position-3__ww-en_1.jpeg";
import img5 from "../images/iphone_15/iphone_15_pro_max_natural_titanium_pdp_image_position-4__ww-en_1.jpeg";

const images = [
    { original: img1, thumbnail: img1 },
    { original: img2, thumbnail: img2 },
    { original: img3, thumbnail: img3 },
    { original: img4, thumbnail: img4 },
    { original: img5, thumbnail: img5 },
];

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
    const theme = useTheme();
    const isThinnerThanLarge = useMediaQuery(theme.breakpoints.down("lg"));
    return (
        <Grid container spacing={1} mt={-2} pb={3}>
            {/* ---Breadcrumb start--- */}
            <Grid item xs={12}>
                <Stack>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" to="/">
                            MUI
                        </Link>
                        <Link underline="hover" color="inherit" to="/material-ui/getting-started/installation/">
                            Core
                        </Link>
                        <Typography color="text.primary">Breadcrumbs</Typography>
                    </Breadcrumbs>
                </Stack>
            </Grid>
            {/* ---Breadcrumb finish--- */}
            <Grid item xs={12} lg={5}>
                {isThinnerThanLarge && (
                    <Card elevation={2} sx={{ p: 1, pl: 3, pr: 3, mb: 1 }} square={true}>
                        <CardContentCustomized>
                            <Typography component="h4" variant="h4">
                                iPhone 14 128GB Red
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
                                    iPhone 14 128GB Red
                                </Typography>
                            </CardContentCustomized>
                        </Card>
                    )}
                    <Card elevation={2} sx={{ p: 1, pl: 3, pr: 3, mb: 1 }} square={true}>
                        <CardContentCustomized>
                            <Typography component="h6" variant="h6" sx={{ mr: 2 }}>
                                Storage options:
                            </Typography>
                            <ButtonGroup variant="outlined" aria-label="Basic button group">
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
                                <RoundButton back="red"></RoundButton>
                                <RoundButton back="black"></RoundButton>
                                <RoundButton back="yellow"></RoundButton>
                            </div>
                        </CardContentCustomized>
                    </Card>
                    <Card elevation={2} sx={{ p: 1, pl: 3, pr: 3, mb: 1 }} square={true}>
                        <CardContentCustomized needmobilechange="false" sx={{ justifyContent: "space-between", gap: 1 }}>
                            <Typography component="h4" variant="h4">
                                900$
                            </Typography>

                            <div>
                                <IconButton aria-label="add to favorites" size="large">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="add to commparison" size="large">
                                    <BalanceIcon />
                                </IconButton>
                                <IconButton aria-label="share" size="large">
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
                        <Button variant="contained" size="large" sx={{ width: "100%" }}>
                            Add to Cart
                        </Button>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default SingleDevicePage;
