import React from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

import iphone15Img from "../../images/iphone_15_pro_max_natural_titanium_pdp_image_position-1__ww-en_1.jpeg";
import iphone14Img from "../../images/wwen_iphone14_q422_productred_pdp_image_position-1a_1.jpeg";
import iphone13Img from "../../images/iphone-13-midnight-select-2021.534x728_m_3.jpeg";

const DevicesList = () => {
    return (
        <Grid className="devices-list" item container xs={12} lg={10} spacing={1}>
            {/* --- CARD START --- */}
            <Grid item xs={6} lg={4} xl={3}>
                <Card elevation={2} sx={{ padding: 1 }}>
                    <CardMedia sx={{ height: 250, objectFit: "contain" }} image={iphone15Img} title="stuff" component="img" />
                    <CardContent sx={{ p: 1, pb: 0 }}>
                        <Typography component="h6" variant="subtitle1">
                            iPhone 14 128GB Red
                        </Typography>
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
                </Card>
            </Grid>
            {/* --- CARD FINISH --- */}

            {/* --- CARD START --- */}
            <Grid item xs={6} lg={4} xl={3}>
                <Card elevation={2} sx={{ padding: 1 }}>
                    <CardMedia sx={{ height: 250, objectFit: "contain" }} image={iphone14Img} title="stuff" component="img" />
                    <CardContent sx={{ p: 1, pb: 0 }}>
                        <Typography component="h6" variant="subtitle1">
                            iPhone 14 128GB Red
                        </Typography>
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
                </Card>
            </Grid>
            {/* --- CARD FINISH --- */}

            {/* --- CARD START --- */}
            <Grid item xs={6} lg={4} xl={3}>
                <Card elevation={2} sx={{ padding: 1 }}>
                    <CardMedia sx={{ height: 250, objectFit: "contain" }} image={iphone13Img} title="stuff" component="img" />
                    <CardContent sx={{ p: 1, pb: 0 }}>
                        <Typography component="h6" variant="subtitle1">
                            iPhone 14 128GB Red
                        </Typography>
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
                </Card>
            </Grid>
            {/* --- CARD FINISH --- */}

            {/* --- CARD START --- */}
            <Grid item xs={6} lg={4} xl={3}>
                <Card elevation={2} sx={{ padding: 1 }}>
                    <CardMedia sx={{ height: 250, objectFit: "contain" }} image={iphone15Img} title="stuff" component="img" />
                    <CardContent sx={{ p: 1, pb: 0 }}>
                        <Typography component="h6" variant="subtitle1">
                            iPhone 14 128GB Red
                        </Typography>
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
                </Card>
            </Grid>
            {/* --- CARD FINISH --- */}

            {/* --- CARD START --- */}
            <Grid item xs={6} lg={4} xl={3}>
                <Card elevation={2} sx={{ padding: 1 }}>
                    <CardMedia sx={{ height: 250, objectFit: "contain" }} image={iphone14Img} title="stuff" component="img" />
                    <CardContent sx={{ p: 1, pb: 0 }}>
                        <Typography component="h6" variant="subtitle1">
                            iPhone 14 128GB Red
                        </Typography>
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
                </Card>
            </Grid>
            {/* --- CARD FINISH --- */}

            {/* --- CARD START --- */}
            <Grid item xs={6} lg={4} xl={3}>
                <Card elevation={2} sx={{ padding: 1 }}>
                    <CardMedia sx={{ height: 250, objectFit: "contain" }} image={iphone13Img} title="stuff" component="img" />
                    <CardContent sx={{ p: 1, pb: 0 }}>
                        <Typography component="h6" variant="subtitle1">
                            iPhone 14 128GB Red
                        </Typography>
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
                </Card>
            </Grid>
            {/* --- CARD FINISH --- */}

            {/* --- CARD START --- */}
            <Grid item xs={6} lg={4} xl={3}>
                <Card elevation={2} sx={{ padding: 1 }}>
                    <CardMedia sx={{ height: 250, objectFit: "contain" }} image={iphone15Img} title="stuff" component="img" />
                    <CardContent sx={{ p: 1, pb: 0 }}>
                        <Typography component="h6" variant="subtitle1">
                            iPhone 14 128GB Red
                        </Typography>
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
                </Card>
            </Grid>
            {/* --- CARD FINISH --- */}

            {/* --- CARD START --- */}
            <Grid item xs={6} lg={4} xl={3}>
                <Card elevation={2} sx={{ padding: 1 }}>
                    <CardMedia sx={{ height: 250, objectFit: "contain" }} image={iphone14Img} title="stuff" component="img" />
                    <CardContent sx={{ p: 1, pb: 0 }}>
                        <Typography component="h6" variant="subtitle1">
                            iPhone 14 128GB Red
                        </Typography>
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
                </Card>
            </Grid>
            {/* --- CARD FINISH --- */}

            {/* --- CARD START --- */}
            <Grid item xs={6} lg={4} xl={3}>
                <Card elevation={2} sx={{ padding: 1 }}>
                    <CardMedia sx={{ height: 250, objectFit: "contain" }} image={iphone13Img} title="stuff" component="img" />
                    <CardContent sx={{ p: 1, pb: 0 }}>
                        <Typography component="h6" variant="subtitle1">
                            iPhone 14 128GB Red
                        </Typography>
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
                </Card>
            </Grid>
            {/* --- CARD FINISH --- */}

            {/* --- CARD START --- */}
            <Grid item xs={6} lg={4} xl={3}>
                <Card elevation={2} sx={{ padding: 1 }}>
                    <CardMedia sx={{ height: 250, objectFit: "contain" }} image={iphone15Img} title="stuff" component="img" />
                    <CardContent sx={{ p: 1, pb: 0 }}>
                        <Typography component="h6" variant="subtitle1">
                            iPhone 14 128GB Red
                        </Typography>
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
                </Card>
            </Grid>
            {/* --- CARD FINISH --- */}

            {/* --- CARD START --- */}
            <Grid item xs={6} lg={4} xl={3}>
                <Card elevation={2} sx={{ padding: 1 }}>
                    <CardMedia sx={{ height: 250, objectFit: "contain" }} image={iphone14Img} title="stuff" component="img" />
                    <CardContent sx={{ p: 1, pb: 0 }}>
                        <Typography component="h6" variant="subtitle1">
                            iPhone 14 128GB Red
                        </Typography>
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
                </Card>
            </Grid>
            {/* --- CARD FINISH --- */}

            {/* --- CARD START --- */}
            <Grid item xs={6} lg={4} xl={3}>
                <Card elevation={2} sx={{ padding: 1 }}>
                    <CardMedia sx={{ height: 250, objectFit: "contain" }} image={iphone13Img} title="stuff" component="img" />
                    <CardContent sx={{ p: 1, pb: 0 }}>
                        <Typography component="h6" variant="subtitle1">
                            iPhone 14 128GB Red
                        </Typography>
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
                </Card>
            </Grid>
            {/* --- CARD FINISH --- */}

            {/* --- CARD START --- */}
            <Grid item xs={6} lg={4} xl={3}>
                <Card elevation={2} sx={{ padding: 1 }}>
                    <CardMedia sx={{ height: 250, objectFit: "contain" }} image={iphone15Img} title="stuff" component="img" />
                    <CardContent sx={{ p: 1, pb: 0 }}>
                        <Typography component="h6" variant="subtitle1">
                            iPhone 14 128GB Red
                        </Typography>
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
                </Card>
            </Grid>
            {/* --- CARD FINISH --- */}
        </Grid>
    );
};

export default DevicesList;
