import React from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

import FilterAccordions from "../ui/FilterAccordions";
import iphone15Img from "../images/iphone_15_pro_max_natural_titanium_pdp_image_position-1__ww-en_1.jpeg";

const SingleDevicePage = () => {
    const theme = useTheme();
    const isThinnerThanLarge = useMediaQuery(theme.breakpoints.down("lg"));
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} lg={2}>
                {!isThinnerThanLarge && <FilterAccordions />}
            </Grid>
            {/* --- Single Device --- */}
            <Card elevation={2} sx={{ p: 2 }}>
                <CardMedia sx={{ height: { xs: 150, sm: 250 }, objectFit: "contain" }} image={iphone15Img} title="stuff" component="img" />
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
    );
};

export default SingleDevicePage;
