import React from "react";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Box,
    Button,
    ButtonGroup,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Divider,
    Grid,
    IconButton,
    Link,
    Typography,
    Stack,
    styled,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import iphone15Img from "../images/iphone_15/iphone_15_pro_max_natural_titanium_pdp_image_position-1__ww-en_1.jpeg";

const BoxOrderSummary = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "8px 0px",
});

const CardAdaptive = styled(Card)(({ theme }) => ({
    // padding: "16px",
    padding: "8px",
    marginBottom: "8px",
    display: "flex",
    flexWrap: "no-wrap",
    [theme.breakpoints.up("sm")]: {
        padding: "16px",
    },
}));

const CardContentImage = styled(CardContent)(({ theme }) => ({
    padding: 0,
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    // flexBasis: "100%",
    [theme.breakpoints.up("sm")]: {
        // flexBasis: "auto",
    },
}));

const CardContentInfo = styled(CardContent)(({ theme }) => ({
    padding: 0,
    flexGrow: 4,
    display: "flex",
    // flexDirection: "row",
    alignItems: "center",
    // flexBasis: "100%",
    [theme.breakpoints.up("sm")]: {
        // flexBasis: "auto",
        // alignItems: "center",
    },
}));

const LinkTitle = styled(Link)(({ theme }) => ({
    fontWeight: 600,
    margin: "8px 0px",
    fontSize: 16,
    [theme.breakpoints.up("sm")]: {
        fontSize: 22,
    },
}));

const CardContentPriceAndCounter = styled(CardContent)(({ theme }) => ({
    padding: 0,
    flexGrow: 1,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    "&:last-child": {
        paddingBottom: 0,
    },
}));

const MyOrdersPage = () => {
    const theme = useTheme();
    const isMobileBreakpoint = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Grid container spacing={1} mt={-2} pb={3}>
            <Grid item xs={12}>
                <Stack direction="row" alignItems="center" spacing={2}>
                    <IconButton>
                        <ArrowBackIcon fontSize="large" />
                    </IconButton>
                    <Typography variant="h4">My Orders</Typography>
                </Stack>
            </Grid>
            <Grid className="cart-items" item xs={12}>
                {/* ------------------ FIRST ACCORDION START ------------------ */}
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowDownwardIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        sx={{
                            p: 1,
                            "& .MuiAccordionSummary-content": {
                                p: { xs: "0", sm: "0px 16px" },
                                gap: { xs: 1, sm: 4 },
                                alignItems: "center",
                            },
                            "& .MuiAccordionSummary-expandIconWrapper": { padding: { xs: "0", sm: "0px 8px" } },
                        }}
                    >
                        <Typography
                            variant={isMobileBreakpoint ? "body2" : "h6"}
                            fontWeight={400}
                            fontSize={isMobileBreakpoint && "0.8rem"}
                        >
                            № 84983533
                        </Typography>
                        <Typography
                            variant={isMobileBreakpoint ? "body2" : "h6"}
                            fontWeight={400}
                            fontSize={isMobileBreakpoint && "0.8rem"}
                        >
                            11.03.2024
                        </Typography>
                        <Typography
                            variant={isMobileBreakpoint ? "body2" : "h6"}
                            fontWeight={400}
                            fontSize={isMobileBreakpoint && "0.8rem"}
                        >
                            Delivered
                        </Typography>
                        <Typography
                            variant={isMobileBreakpoint ? "body2" : "h6"}
                            fontWeight={400}
                            fontSize={isMobileBreakpoint && "0.8rem"}
                        >
                            1350$
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ p: { xs: "0px 8px", sm: "0px 16px" } }}>
                        {/* CardAdaptive First */}
                        <CardAdaptive>
                            {/*  */}
                            <CardContentImage>
                                <CardActionArea className="my-card-action-area" to="/devices/123">
                                    <CardMedia
                                        sx={{ height: 50, objectFit: "contain", width: "auto" }}
                                        image={iphone15Img}
                                        title="stuff"
                                        component="img"
                                    />
                                </CardActionArea>
                            </CardContentImage>
                            {/*  */}

                            <CardContentInfo>
                                <LinkTitle to="/devices/123" sx={{ fontWeight: 300 }}>
                                    iPhone 14 128GB Red
                                </LinkTitle>
                            </CardContentInfo>
                            {/*  */}
                            <CardContentPriceAndCounter>
                                <Typography component="h6" variant={isMobileBreakpoint ? "subtitle1" : "h6"}>
                                    900 $
                                </Typography>
                            </CardContentPriceAndCounter>
                        </CardAdaptive>
                    </AccordionDetails>
                </Accordion>
                {/* ------------------ SECOND ACCORDION START ------------------ */}
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowDownwardIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        sx={{
                            p: 1,
                            "& .MuiAccordionSummary-content": {
                                p: { xs: "0", sm: "0px 16px" },
                                gap: { xs: 1, sm: 4 },
                                alignItems: "center",
                            },
                            "& .MuiAccordionSummary-expandIconWrapper": { padding: { xs: "0", sm: "0px 8px" } },
                        }}
                    >
                        <Typography
                            variant={isMobileBreakpoint ? "body2" : "h6"}
                            fontWeight={400}
                            fontSize={isMobileBreakpoint && "0.8rem"}
                        >
                            № 84983533
                        </Typography>
                        <Typography
                            variant={isMobileBreakpoint ? "body2" : "h6"}
                            fontWeight={400}
                            fontSize={isMobileBreakpoint && "0.8rem"}
                        >
                            11.03.2024
                        </Typography>
                        <Typography
                            variant={isMobileBreakpoint ? "body2" : "h6"}
                            fontWeight={400}
                            fontSize={isMobileBreakpoint && "0.8rem"}
                        >
                            Delivered
                        </Typography>
                        <Typography
                            variant={isMobileBreakpoint ? "body2" : "h6"}
                            fontWeight={400}
                            fontSize={isMobileBreakpoint && "0.8rem"}
                        >
                            1350$
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ p: { xs: "0px 8px", sm: "0px 16px" } }}>
                        {/* CardAdaptive First */}
                        <CardAdaptive>
                            {/*  */}
                            <CardContentImage>
                                <CardActionArea className="my-card-action-area" to="/devices/123">
                                    <CardMedia
                                        sx={{ height: 50, objectFit: "contain", width: "auto" }}
                                        image={iphone15Img}
                                        title="stuff"
                                        component="img"
                                    />
                                </CardActionArea>
                            </CardContentImage>
                            {/*  */}

                            <CardContentInfo>
                                <LinkTitle to="/devices/123" sx={{ fontWeight: 300 }}>
                                    iPhone 14 128GB Red
                                </LinkTitle>
                            </CardContentInfo>
                            {/*  */}
                            <CardContentPriceAndCounter>
                                <Typography component="h6" variant={isMobileBreakpoint ? "subtitle1" : "h6"}>
                                    900 $
                                </Typography>
                            </CardContentPriceAndCounter>
                        </CardAdaptive>
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </Grid>
    );
};

export default MyOrdersPage;
