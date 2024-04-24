import { Grid, Skeleton } from "@mui/material";
import React from "react";

const LoadingSkeletons = ({ grid = { xs: 6, sm: 6, md: 4, lg: 4, xl: 3 }, needsGridContainer, skeletonAmount }) => {
    const { xs, sm, md, lg, xl } = grid;
    if (needsGridContainer) {
        return (
            <Grid className="devices-list" item xs={12} lg={10} pb={3}>
                <Grid container spacing={1}>
                    {new Array(skeletonAmount).fill("").map((_, index) => (
                        <Grid key={index} item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
                            <Skeleton variant="rounded" animation="wave" height={350} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        );
    }

    return (
        <>
            {new Array(skeletonAmount).fill("").map((_, index) => (
                <Skeleton key={index} variant="rounded" animation="wave" height={150} sx={{ mb: 1 }} />
            ))}
        </>
    );
};

export default LoadingSkeletons;
