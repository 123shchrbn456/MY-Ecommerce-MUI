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

const DeviceItem = ({ grid = { xs: 6, sm: 6, md: 4, lg: 4, xl: 3 }, deviceData, handleOpenAlertModal }) => {
    const dispatch = useDispatch();
    const { xs, sm, md, lg, xl } = grid;
    // const { id, brand, model, color, imgURLs, price, storage } = deviceData;
    const { id, avatar_img, brand, device_name, memory, price, title_color } = deviceData;

    const onBuyClick = () => {
        const name = brand + " " + device_name;
        // dispatch(addToCart({ name: model, id, storage, img: imgURLs[0], color, price }));
        dispatch(addToCart({ name: name, id, storage: memory, img: avatar_img, color: title_color, price }));
    };

    return (
        <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
            <CardCustomized elevation={2} sx={{ p: 2 }}>
                <CardActionArea className="my-card-action-area" to={`/devices/${id}`}>
                    <CardMedia
                        sx={{ height: { xs: 150, sm: 250 }, objectFit: "contain", transition: "transform .3s" }}
                        image={avatar_img}
                        title="avatar"
                        component="img"
                    />
                </CardActionArea>
                <CardContent sx={{ p: 1, pb: 0 }}>
                    <LinkCustomized to={`/devices/${id}`}>
                        <Typography component="h6" variant="subtitle1" noWrap={true} sx={{ textAlign: "center" }}>
                            {brand} {device_name} {memory}
                        </Typography>
                        <Typography component="h6" variant="subtitle1" noWrap={true} sx={{ textAlign: "center" }}>
                            ({title_color})
                        </Typography>
                    </LinkCustomized>

                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Typography
                            component="h5"
                            variant="h6"
                            color="#999"
                            sx={{ fontSize: { xs: "1.2rem", sm: "1.3rem" }, textAlign: "left", textDecorationLine: "line-through" }}
                        >
                            {price + 150} $
                        </Typography>
                        <Typography
                            component="h5"
                            variant="h6"
                            sx={{ fontSize: { xs: "1.2rem", sm: "1.3rem" }, textAlign: { xs: "center", sm: "right" } }}
                        >
                            {price} $
                        </Typography>
                    </Box>
                </CardContent>
                <CardActions sx={{ p: 1, justifyContent: { xs: "center", sm: "space-between" }, flexWrap: { xs: "wrap", sm: "no-wrap" } }}>
                    <Button variant="contained" onClick={onBuyClick}>
                        Buy
                    </Button>
                    <Box mt={1} mb={1} ml={0}>
                        <IconButton aria-label="add to favorites" size="small" onClick={handleOpenAlertModal}>
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="add to commparison" size="small" onClick={handleOpenAlertModal}>
                            <BalanceIcon />
                        </IconButton>
                        <IconButton aria-label="share" size="small" onClick={handleOpenAlertModal}>
                            <ShareIcon />
                        </IconButton>
                    </Box>
                </CardActions>
            </CardCustomized>
        </Grid>
    );
};

export default DeviceItem;
