import React from "react";
import { useDispatch } from "react-redux";
import {
    Box,
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

import { addToCart } from "../cart/cartSlice";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import BalanceIcon from "@mui/icons-material/Balance";

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

const DeviceItem = ({ grid = { xs: 6, sm: 6, md: 4, lg: 4, xl: 3 }, deviceData }) => {
    const dispatch = useDispatch();
    const { xs, sm, md, lg, xl } = grid;
    const { id, brand, model, color, imgURLs, price, storage } = deviceData;

    const onBuyClick = () => {
        const name = model;
        // send to the cart
        dispatch(addToCart({ name, id, storage, img: imgURLs[0], color, price }));
    };

    return (
        <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
            <CardCustomized elevation={2} sx={{ p: 2 }}>
                <CardActionArea className="my-card-action-area" to={`/devices/${id}`}>
                    <CardMedia
                        sx={{ height: { xs: 150, sm: 250 }, objectFit: "contain", transition: "transform .3s" }}
                        image={imgURLs[0]}
                        title="avatar"
                        component="img"
                    />
                </CardActionArea>
                <CardContent sx={{ p: 1, pb: 0 }}>
                    <LinkCustomized to="/devices/123">
                        <Typography component="h6" variant="subtitle1" noWrap={true} sx={{ textAlign: { xs: "center", sm: "left" } }}>
                            {brand} {model} {color} {storage}
                        </Typography>
                    </LinkCustomized>

                    <Typography
                        component="h5"
                        variant="h5"
                        sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" }, textAlign: { xs: "center", sm: "left" } }}
                    >
                        {price} $
                    </Typography>
                </CardContent>
                <CardActions sx={{ p: 1, justifyContent: { xs: "center", sm: "space-between" }, flexWrap: { xs: "wrap", sm: "no-wrap" } }}>
                    <Button variant="contained" onClick={onBuyClick}>
                        Buy
                    </Button>
                    <Box mt={1} mb={1} ml={0}>
                        <IconButton aria-label="add to favorites" size="small">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="add to commparison" size="small">
                            <BalanceIcon />
                        </IconButton>
                        <IconButton aria-label="share" size="small">
                            <ShareIcon />
                        </IconButton>
                    </Box>
                </CardActions>
            </CardCustomized>
        </Grid>
    );
};

export default DeviceItem;
