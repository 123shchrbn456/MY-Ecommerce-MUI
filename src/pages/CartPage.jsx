import React from "react";
import {
    Box,
    Button,
    ButtonGroup,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    IconButton,
    Link,
    Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";

import iphone15Img from "../images/iphone_15/iphone_15_pro_max_natural_titanium_pdp_image_position-1__ww-en_1.jpeg";
const CartPage = () => {
    return (
        <Grid container spacing={1}>
            <Grid className="cart-items" item xs={12} lg={8}>
                <Card elevation={2} sx={{ p: 2 }}>
                    <CardActionArea className="my-card-action-area" to="/devices/123">
                        <CardMedia sx={{ height: 150, objectFit: "contain" }} image={iphone15Img} title="stuff" component="img" />
                    </CardActionArea>
                    <CardContent sx={{ p: 1 }}>
                        <Link to="/devices/123">
                            <Typography component="h6" variant="subtitle1">
                                iPhone 14 128GB Red
                            </Typography>
                        </Link>
                        <Typography component="p" variant="body1">
                            Quickfind Code: 1828880
                        </Typography>
                        <Box>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="delete from cart">
                                <DeleteIcon />
                            </IconButton>
                        </Box>
                    </CardContent>
                    <CardContent sx={{ p: 1 }}>
                        <Typography component="h5" variant="h5">
                            900 $
                        </Typography>
                        <ButtonGroup variant="outlined" aria-label="Basic button group">
                            <Button>-</Button>
                            <Button>1</Button>
                            <Button>+</Button>
                        </ButtonGroup>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} lg={4}>
                <Card>
                    <h3>Order Details</h3>
                </Card>
            </Grid>
        </Grid>
    );
};

export default CartPage;
