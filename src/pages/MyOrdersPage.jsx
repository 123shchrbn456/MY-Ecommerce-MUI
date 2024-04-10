import React from "react";
import { useNavigate } from "react-router-dom";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    IconButton,
    Link,
    Typography,
    Stack,
    styled,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import iphone15Img from "../images/iphone_15/iphone_15_pro_max_natural_titanium_pdp_image_position-1__ww-en_1.jpeg";

const CardAdaptive = styled(Card)(({ theme }) => ({
    padding: "8px",
    marginBottom: "8px",
    display: "flex",
    flexWrap: "no-wrap",
    [theme.breakpoints.up("sm")]: {
        padding: "16px",
    },
}));

const CardContentImage = styled(CardContent)({
    padding: 0,
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
});

const CardContentInfo = styled(CardContent)({
    padding: 0,
    flexGrow: 4,
    display: "flex",
    alignItems: "center",
});

const LinkTitle = styled(Link)(({ theme }) => ({
    fontWeight: 600,
    margin: "8px 0px",
    fontSize: 16,
    [theme.breakpoints.up("sm")]: {
        fontSize: 22,
    },
}));

const CardContentPriceAndCounter = styled(CardContent)({
    padding: 0,
    flexGrow: 1,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    "&:last-child": {
        paddingBottom: 0,
    },
});

const MyOrdersPage = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const isMobileBreakpoint = useMediaQuery(theme.breakpoints.down("sm"));

    const backButtonClickHandler = () => navigate(-1);

    return (
        <Grid container spacing={1} mt={-2} pb={3}>
            <Grid item xs={12}>
                <Stack direction="row" alignItems="center" spacing={2}>
                    <IconButton onClick={backButtonClickHandler}>
                        <ArrowBackIcon fontSize="large" />
                    </IconButton>
                    <Typography variant="h4">My Orders</Typography>
                </Stack>
            </Grid>
            <Grid className="cart-items" item xs={12}>
                {/* ------------------ FIRST ACCORDION START ------------------ */}
                <Accordion defaultExpanded={false} disableGutters={true} sx={{ bgcolor: "#C0C0C0" }}>
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
                    <AccordionDetails sx={{ p: { xs: "0px 8px 12px", sm: "0px 16px 12px" } }}>
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
                <Accordion defaultExpanded={false} disableGutters={true} sx={{ bgcolor: "#C0C0C0" }}>
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
                    <AccordionDetails sx={{ p: { xs: "0px 8px 12px", sm: "0px 16px 12px" } }}>
                        {/* CardAdaptive First */}
                        <CardAdaptive elevation={2}>
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
                        {/* CardAdaptive Second */}
                        <CardAdaptive elevation={2}>
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
