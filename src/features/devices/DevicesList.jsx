import React, { useState } from "react";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    IconButton,
    Typography,
    CardActionArea,
    styled,
    Link,
} from "@mui/material";
import DevicesOperations from "./DevicesOperations";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import BalanceIcon from "@mui/icons-material/Balance";

import iphone15Img from "../../images/iphone_15_pro_max_natural_titanium_pdp_image_position-1__ww-en_1.jpeg";
import iphone14Img from "../../images/wwen_iphone14_q422_productred_pdp_image_position-1a_1.jpeg";
import iphone13Img from "../../images/iphone-13-midnight-select-2021.534x728_m_3.jpeg";
import DeviceItem from "./DeviceItem";

const CardCustomized = styled(Card)({
    "&:hover": {
        boxShadow: "0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12);",
    },
});

const LinkCustomized = styled(Link)({
    color: "black",
});

const DevicesList = () => {
    const [grid, setGrid] = useState({ xs: 6, sm: 6, md: 4, lg: 4, xl: 3 });
    const { xs, sm, md, lg, xl } = grid;

    const changeGridHandler = (gridNum) => {
        setGrid(gridNum);
    };

    return (
        <Grid className="devices-list" item container xs={12} lg={10} spacing={1} pb={3}>
            <DevicesOperations changeGridHandler={changeGridHandler} />
            <DeviceItem grid={grid} />
            <DeviceItem grid={grid} />
            <DeviceItem grid={grid} />
            <DeviceItem grid={grid} />
            {/* --- CARD START --- */}
            <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
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
            </Grid>
            {/* --- CARD FINISH --- */}

            {/* --- CARD START --- */}
            <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
                <CardCustomized elevation={2} sx={{ p: 2 }}>
                    <CardActionArea className="my-card-action-area" to="/devices/123">
                        <CardMedia
                            sx={{ height: { xs: 150, sm: 250 }, objectFit: "contain" }}
                            image={iphone14Img}
                            title="stuff"
                            component="img"
                        />
                    </CardActionArea>

                    <CardContent sx={{ p: 1, pb: 0 }}>
                        <LinkCustomized to="/devices/1">
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
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                    </CardActions>
                </CardCustomized>
            </Grid>
            {/* --- CARD FINISH --- */}

            {/* --- CARD START --- */}
            <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
                <CardCustomized elevation={2} sx={{ p: 2 }}>
                    <CardActionArea className="my-card-action-area" to="/devices/123">
                        <CardMedia
                            sx={{ height: { xs: 150, sm: 250 }, objectFit: "contain" }}
                            image={iphone13Img}
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
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                    </CardActions>
                </CardCustomized>
            </Grid>
            {/* --- CARD FINISH --- */}

            {/* --- CARD START --- */}
            <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
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
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                    </CardActions>
                </CardCustomized>
            </Grid>
            {/* --- CARD FINISH --- */}

            {/* --- CARD START --- */}
            <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
                <CardCustomized elevation={2} sx={{ p: 2 }}>
                    <CardActionArea className="my-card-action-area" to="/devices/123">
                        <CardMedia
                            sx={{ height: { xs: 150, sm: 250 }, objectFit: "contain" }}
                            image={iphone14Img}
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
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                    </CardActions>
                </CardCustomized>
            </Grid>
            {/* --- CARD FINISH --- */}

            {/* --- CARD START --- */}
            <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
                <CardCustomized elevation={2} sx={{ p: 2 }}>
                    <CardActionArea className="my-card-action-area" to="/devices/123">
                        <CardMedia
                            sx={{ height: { xs: 150, sm: 250 }, objectFit: "contain" }}
                            image={iphone13Img}
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
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                    </CardActions>
                </CardCustomized>
            </Grid>
            {/* --- CARD FINISH --- */}

            {/* --- CARD START --- */}
            <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
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
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                    </CardActions>
                </CardCustomized>
            </Grid>
            {/* --- CARD FINISH --- */}

            {/* --- CARD START --- */}
            <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
                <CardCustomized elevation={2} sx={{ p: 2 }}>
                    <CardActionArea className="my-card-action-area" to="/devices/123">
                        <CardMedia
                            sx={{ height: { xs: 150, sm: 250 }, objectFit: "contain" }}
                            image={iphone14Img}
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
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                    </CardActions>
                </CardCustomized>
            </Grid>
            {/* --- CARD FINISH --- */}

            {/* --- CARD START --- */}
            <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
                <CardCustomized elevation={2} sx={{ p: 2 }}>
                    <CardActionArea className="my-card-action-area" to="/devices/123">
                        <CardMedia
                            sx={{ height: { xs: 150, sm: 250 }, objectFit: "contain" }}
                            image={iphone13Img}
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
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                    </CardActions>
                </CardCustomized>
            </Grid>
            {/* --- CARD FINISH --- */}

            {/* --- CARD START --- */}
            <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
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
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                    </CardActions>
                </CardCustomized>
            </Grid>
            {/* --- CARD FINISH --- */}

            {/* --- CARD START --- */}
            <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
                <CardCustomized elevation={2} sx={{ p: 2 }}>
                    <CardActionArea className="my-card-action-area" to="/devices/123">
                        <CardMedia
                            sx={{ height: { xs: 150, sm: 250 }, objectFit: "contain" }}
                            image={iphone14Img}
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
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                    </CardActions>
                </CardCustomized>
            </Grid>
            {/* --- CARD FINISH --- */}

            {/* --- CARD START --- */}
            <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
                <CardCustomized elevation={2} sx={{ p: 2 }}>
                    <CardActionArea className="my-card-action-area" to="/devices/123">
                        <CardMedia
                            sx={{ height: { xs: 150, sm: 250 }, objectFit: "contain" }}
                            image={iphone13Img}
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
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                    </CardActions>
                </CardCustomized>
            </Grid>
            {/* --- CARD FINISH --- */}

            {/* --- CARD START --- */}
            <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
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
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                    </CardActions>
                </CardCustomized>
            </Grid>
            {/* --- CARD FINISH --- */}
        </Grid>
    );
};

export default DevicesList;
