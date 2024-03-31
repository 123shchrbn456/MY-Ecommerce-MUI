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
import "react-image-gallery/styles/css/image-gallery.css";

import img from "../images/iphone_15/iphone_15_pro_max_natural_titanium_pdp_image_position-1__ww-en_1.jpeg";
import img1 from "../images/iphone_15/iphone_15_pro_max_natural_titanium_pdp_image_position-1__ww-en_1.jpeg";
import img2 from "../images/iphone_15/iphone_15_pro_max_natural_titanium_pdp_image_position-1_alt__ww-en_1.jpeg";
import img3 from "../images/iphone_15/iphone_15_pro_max_natural_titanium_pdp_image_position-2__ww-en_1.jpeg";
import img4 from "../images/iphone_15/iphone_15_pro_max_natural_titanium_pdp_image_position-3__ww-en_1.jpeg";
import img5 from "../images/iphone_15/iphone_15_pro_max_natural_titanium_pdp_image_position-4__ww-en_1.jpeg";

const images = [
    { original: img1, thumbnail: img1, originalHeight: "500px" },
    { original: img2, thumbnail: img2, originalHeight: "500px" },
    { original: img3, thumbnail: img3, originalHeight: "500px" },
    { original: img4, thumbnail: img4, originalHeight: "500px" },
    { original: img5, thumbnail: img5, originalHeight: "500px" },
];

const RoundButton = styled(Button)(({ back }) => ({
    borderRadius: "50%",
    minWidth: "50px",
    width: "50px",
    height: "50px",
    padding: 0,
    marginRight: "8px",
    opacity: 0.9,
    // backgroundColor: `${back}`,
    backgroundColor: back,
    "&:hover": {
        border: "3px solid #BDBDBD",
        opacity: 1,
        backgroundColor: back,
    },
}));

const SingleDevicePage = () => {
    const theme = useTheme();
    const isThinnerThanLarge = useMediaQuery(theme.breakpoints.down("lg"));
    return (
        <Grid container spacing={1}>
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
            <Grid item xs={12} lg={5}>
                <Card elevation={2} sx={{ p: 2 }} square={true}>
                    <ImageGallery
                        items={images}
                        showNav={true}
                        showPlayButton={false}
                        showFullscreenButton={true}
                        useBrowserFullscreen={false}
                    />
                </Card>
            </Grid>
            <Grid item container xs={12} lg={7}>
                <Grid item lg={12}>
                    <Card elevation={2} sx={{ p: 2, mb: 1 }} square={true}>
                        {/* <CardContent sx={{ p: 1, pb: 0 }}> */}
                        <Typography component="h4" variant="h4">
                            iPhone 14 128GB Red
                        </Typography>
                        {/* </CardContent> */}
                    </Card>
                    <Card elevation={2} sx={{ p: 2, mb: 1 }} square={true}>
                        <CardContent sx={{ p: 1, pb: 0 }}>
                            <Typography component="h6" variant="h6">
                                Storage options:
                            </Typography>
                            <ButtonGroup variant="outlined" aria-label="Basic button group">
                                <Button>256GB</Button>
                                <Button>512GB</Button>
                                <Button>1024GB</Button>
                            </ButtonGroup>
                        </CardContent>
                    </Card>
                    <Card elevation={2} sx={{ p: 2, mb: 1 }} square={true}>
                        <CardContent sx={{ p: 1, pb: 0 }}>
                            <Typography component="h6" variant="h6">
                                Colors:
                            </Typography>
                            <RoundButton back="red"></RoundButton>
                            <RoundButton back="black"></RoundButton>
                            <RoundButton back="yellow"></RoundButton>
                        </CardContent>
                    </Card>
                    <Card elevation={2} sx={{ p: 2, mb: 1 }} square={true}>
                        <CardContent sx={{ p: 1, pb: 0, display: "flex", alignItems: "center", gap: 1 }}>
                            <Typography component="h4" variant="h4" mr={4}>
                                900 $
                            </Typography>
                            <Button variant="contained" size="large">
                                Buy
                            </Button>
                            <IconButton aria-label="add to favorites" size="large">
                                <FavoriteIcon />
                            </IconButton>
                        </CardContent>
                        {/* <CardActions sx={{ p: 1, justifyContent: "flex-start" }}>
                            <Button variant="contained">Buy</Button>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                        </CardActions> */}
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default SingleDevicePage;
