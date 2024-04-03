import React from "react";
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    IconButton,
    Link,
    Typography,
    styled,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import BalanceIcon from "@mui/icons-material/Balance";

import iphone15Img from "../../images/iphone_15_pro_max_natural_titanium_pdp_image_position-1__ww-en_1.jpeg";

const CardCustomized = styled(Card)({
    "&:hover": {
        boxShadow: "0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12);",
        "& .MuiCardMedia-img": {
            transform: "scale(1.1)",
        },
    },
});

const LinkCustomized = styled(Link)({
    color: "black",
});

const DeviceItem = ({ grid = { xs: 6, sm: 6, md: 4, lg: 4, xl: 3 } }) => {
    const { xs, sm, md, lg, xl } = grid;
    return (
        <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
            <CardCustomized elevation={2} sx={{ p: 2 }}>
                <CardActionArea className="my-card-action-area" to="/devices/123">
                    <CardMedia
                        sx={{ height: { xs: 150, sm: 250 }, objectFit: "contain", transition: "transform .3s" }}
                        image={iphone15Img}
                        title="stuff"
                        component="img"
                    />
                </CardActionArea>
                <CardContent sx={{ p: 1, pb: 0 }}>
                    <LinkCustomized to="/devices/123">
                        <Typography component="h6" variant="subtitle1">
                            iPhone 14 128GB Black
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
    );
};

export default DeviceItem;
