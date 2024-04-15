import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Box, IconButton, useMediaQuery, useTheme } from "@mui/material";
import GridOnIcon from "@mui/icons-material/GridOn";
import GridViewIcon from "@mui/icons-material/GridView";

import SortBy from "../../ui/SortBy";
import FilterMobileAccordionsModal from "../../ui/FilterMobileAccordionsModal";
import SortByMobile from "../../ui/SortByMobile";

const DevicesOperations = ({ changeGridHandler }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [active, setActive] = useState(2);
    const theme = useTheme();
    const isThinnerThanLarge = useMediaQuery(theme.breakpoints.down("lg"));

    const smallAmountGrid = { xs: 12, sm: 12, md: 6, lg: 6, xl: 4 };
    const bigAmountGrid = { xs: 6, sm: 6, md: 4, lg: 4, xl: 3 };

    const sortOptions = [
        { name: "Default", URLsortValue: "model_desc" },
        { name: "Price: Low to High", URLsortValue: "price_asc" },
        { name: "Price: High to Low", URLsortValue: "price_desc" },
    ];

    const sortItemClickHandler = (sortValue) => {
        searchParams.set("sort", sortValue);
        setSearchParams(searchParams);
    };

    return (
        <Box
            display="flex"
            sx={{ display: "flex", justifyContent: isThinnerThanLarge ? "space-between" : "flex-end", alignItems: "center" }}
        >
            {isThinnerThanLarge && <FilterMobileAccordionsModal />}
            {isThinnerThanLarge ? (
                <SortByMobile sortOptions={sortOptions} sortItemClickHandler={sortItemClickHandler} />
            ) : (
                <SortBy sortOptions={sortOptions} sortItemClickHandler={sortItemClickHandler} />
            )}
            {/* <IconButton color={active === 1 && "success"} onClick={() => changeGridHandler(smallAmountGrid)} sx={{ borderRadius: 0 }}> */}
            <IconButton
                onClick={() => {
                    changeGridHandler(smallAmountGrid);
                    setActive(1);
                }}
                sx={{ borderRadius: 0 }}
            >
                <GridViewIcon color={active === 1 ? "error" : "default"} />
            </IconButton>
            <IconButton
                onClick={() => {
                    changeGridHandler(bigAmountGrid);
                    setActive(2);
                }}
                sx={{ borderRadius: 0 }}
            >
                <GridOnIcon color={active === 2 ? "error" : "default"} />
            </IconButton>
        </Box>
    );
};

export default DevicesOperations;
