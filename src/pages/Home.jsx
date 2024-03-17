import React from "react";
import { Button, Card, CardMedia, Drawer, Grid, Paper, useMediaQuery, useTheme } from "@mui/material";
import FilterAccordion from "../ui/FilterAccordion";

const Home = () => {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const isThinnerThanMd = useMediaQuery(theme.breakpoints.down("md"));

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
                {!isThinnerThanMd && <FilterAccordion />}
                {isThinnerThanMd && (
                    <>
                        <Button onClick={toggleDrawer(true)}>Filter</Button>
                        <Drawer open={open} anchor="top" onClose={toggleDrawer(false)}>
                            <Button onClick={toggleDrawer(false)}>X</Button>
                            <FilterAccordion />
                        </Drawer>
                    </>
                )}
            </Grid>
            <Grid className="devices-list" item container xs={12} md={9} spacing={1}>
                <Grid item xs={6} lg={4} xl={3}>
                    <Card elevation={2}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://plus.unsplash.com/premium_photo-1666900440561-94dcb6865554?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            title="stuff"
                            // component="img"
                        />
                        <Button variant="contained">Buy</Button>
                    </Card>
                </Grid>

                <Grid item xs={6} lg={4} xl={3}>
                    <Card elevation={2}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://plus.unsplash.com/premium_photo-1666900440561-94dcb6865554?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            title="stuff"
                            component="img"
                        />
                        <Button variant="contained">Buy</Button>
                    </Card>
                </Grid>

                <Grid item xs={6} lg={4} xl={3}>
                    <Card elevation={2}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://plus.unsplash.com/premium_photo-1666900440561-94dcb6865554?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            title="stuff"
                            component="img"
                        />
                        <Button variant="contained">Buy</Button>
                    </Card>
                </Grid>
                <Grid item xs={6} lg={4} xl={3}>
                    <Card elevation={2}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://plus.unsplash.com/premium_photo-1666900440561-94dcb6865554?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            title="stuff"
                            component="img"
                        />
                        <Button variant="contained">Buy</Button>
                    </Card>
                </Grid>
                <Grid item xs={6} lg={4} xl={3}>
                    <Card elevation={2}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://plus.unsplash.com/premium_photo-1666900440561-94dcb6865554?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            title="stuff"
                            component="img"
                        />
                        <Button variant="contained">Buy</Button>
                    </Card>
                </Grid>

                <Grid item xs={6} lg={4} xl={3}>
                    <Card elevation={2}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://plus.unsplash.com/premium_photo-1666900440561-94dcb6865554?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            title="stuff"
                            component="img"
                        />
                        <Button variant="contained">Buy</Button>
                    </Card>
                </Grid>

                <Grid item xs={6} lg={4} xl={3}>
                    <Card elevation={2}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://plus.unsplash.com/premium_photo-1666900440561-94dcb6865554?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            title="stuff"
                            component="img"
                        />
                        <Button variant="contained">Buy</Button>
                    </Card>
                </Grid>
                <Grid item xs={6} lg={4} xl={3}>
                    <Card elevation={2}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://plus.unsplash.com/premium_photo-1666900440561-94dcb6865554?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            title="stuff"
                            component="img"
                        />
                        <Button variant="contained">Buy</Button>
                    </Card>
                </Grid>
                <Grid item xs={6} lg={4} xl={3}>
                    <Card elevation={2}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://plus.unsplash.com/premium_photo-1666900440561-94dcb6865554?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            title="stuff"
                            component="img"
                        />
                        <Button variant="contained">Buy</Button>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Home;
