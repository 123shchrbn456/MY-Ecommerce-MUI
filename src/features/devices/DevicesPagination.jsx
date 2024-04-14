import React from "react";
import { Grid, Pagination } from "@mui/material";

const DevicesPagination = ({ totalPagesNumber, currentPageNumber, pageChangeHandler }) => {
    return (
        <Grid item xs={12}>
            <Pagination
                count={totalPagesNumber}
                page={currentPageNumber}
                defaultPage={1}
                siblingCount={0}
                hideNextButton={true}
                hidePrevButton={true}
                size="large"
                variant="outlined"
                shape="rounded"
                onChange={pageChangeHandler}
            />
        </Grid>
    );
};

export default DevicesPagination;
