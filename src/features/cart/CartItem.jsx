import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, changeItemAmount, decreaseAmountInCart, deleteFromCart } from "./cartSlice";
import {
    Box,
    Button,
    ButtonGroup,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Link,
    Typography,
    styled,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const CardAdaptive = styled(Card)(({ theme }) => ({
    padding: "16px",
    marginBottom: "8px",
    display: "flex",
    flexWrap: "wrap",
    [theme.breakpoints.up("sm")]: {
        flexWrap: "nowrap",
    },
}));

const CardContentImage = styled(CardContent)(({ theme }) => ({
    padding: 0,
    flexGrow: 1,
    flexBasis: "100%",
    [theme.breakpoints.up("sm")]: {
        flexBasis: "auto",
    },
}));

const CardContentInfo = styled(CardContent)(({ theme }) => ({
    padding: 0,
    flexGrow: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexBasis: "100%",
    [theme.breakpoints.up("sm")]: {
        flexBasis: "auto",
        alignItems: "flex-start",
    },
}));

const LinkTitle = styled(Link)(({ theme }) => ({
    fontWeight: 600,
    margin: "8px 0px",
    fontSize: 18,
    [theme.breakpoints.up("sm")]: {
        fontSize: 22,
    },
}));

const CardContentPriceAndCounter = styled(CardContent)(({ theme }) => ({
    padding: 0,
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    "&:last-child": {
        paddingBottom: 0,
    },
    [theme.breakpoints.up("sm")]: {
        flexDirection: "column",
        justifyContent: "space-between",
    },
}));

const CartItem = ({ cartItem }) => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const isMobileBreakpoint = useMediaQuery(theme.breakpoints.down("sm"));

    const { id, name, color, img, storage, price, quantity } = cartItem;

    const onIncreaseAmountClick = () => {
        dispatch(addToCart(cartItem));
    };

    const onDecreaseAmountClick = () => {
        dispatch(decreaseAmountInCart(cartItem));
    };

    const onDeleteItemClick = () => {
        dispatch(deleteFromCart(cartItem));
    };

    const onChangeItemAmount = (e) => {
        const inputValue = e.target.value;
        dispatch(changeItemAmount({ cartItem, inputValue }));
    };

    return (
        <CardAdaptive>
            {/*  */}
            <CardContentImage>
                <CardActionArea className="my-card-action-area" to={`/devices/${id}`}>
                    <CardMedia sx={{ height: 100, objectFit: "contain" }} image={img} title="stuff" component="img" />
                </CardActionArea>
            </CardContentImage>
            {/*  */}
            <CardContentInfo>
                <LinkTitle to={`/devices/${id}`}>
                    {name} {storage} {color}
                </LinkTitle>
                <Typography component="p" variant="body2" color="gray" align="center" sx={{ fontSize: 11 }}>
                    Quickfind Code: 1828880
                </Typography>
                <Button
                    variant="text"
                    sx={{ textTransform: "none", paddingLeft: 0 }}
                    size={isMobileBreakpoint ? "small" : "large"}
                    startIcon={<DeleteIcon />}
                    onClick={onDeleteItemClick}
                >
                    Delete item
                </Button>
            </CardContentInfo>
            {/*  */}
            <CardContentPriceAndCounter>
                <Typography component={isMobileBreakpoint ? "h6" : "h5"} variant={isMobileBreakpoint ? "h6" : "h5"}>
                    {price} $
                </Typography>
                <ButtonGroup variant="outlined" aria-label="Basic button group" size="small">
                    <Button onClick={onDecreaseAmountClick}>-</Button>
                    <Button disableRipple sx={{ p: "1px", "&:hover": { backgroundColor: "transparent" }, width: "40px" }}>
                        <input
                            style={{ width: "100%", height: "100%", textAlign: "center" }}
                            className="my-input-number"
                            type="number"
                            // defaultValue={quantity}
                            min="1"
                            max="99"
                            value={quantity}
                            onChange={onChangeItemAmount}
                        />
                    </Button>
                    <Button onClick={onIncreaseAmountClick}>+</Button>
                </ButtonGroup>
            </CardContentPriceAndCounter>
        </CardAdaptive>
    );
};

export default CartItem;
