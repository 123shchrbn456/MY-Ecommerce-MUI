import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Grid, Skeleton, Typography } from "@mui/material";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { PAGE_SIZE } from "../../utils/constants";

import DevicesOperations from "./DevicesOperations";
import DeviceItem from "./DeviceItem";
import { useGetDevicesFromFirebaseQuery } from "./devicesSlice";
import DevicesPagination from "./DevicesPagination";
import LoadingSkeletons from "../../ui/LoadingSkeletons";

const DevicesList = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [grid, setGrid] = useState({ xs: 6, sm: 6, md: 4, lg: 4, xl: 3 });

    const currentPageNumber = searchParams.get("_page");

    useEffect(() => {
        if (!currentPageNumber) {
            searchParams.set("_page", 1);
            setSearchParams(searchParams);
        }
    }, []);

    const { data, isLoading, isSuccess } = useGetDevicesFromFirebaseQuery({
        uniqueSearchParamsObj: createUniqueSearchParamsObj(),
        pageNum: currentPageNumber,
        pageSize: PAGE_SIZE,
        sortParam: searchParams.get("sort"),
    });

    if (isLoading) return <LoadingSkeletons grid={grid} needsGridContainer={true} skeletonAmount={8} />;

    const { devices = null, totalPagesNumber = null } = data;

    const changeGridHandler = (gridNum) => {
        setGrid(gridNum);
    };

    function getAllImages() {
        const storage = getStorage();
        const storageRef = ref(storage);
        const specificFolderRef = ref(storage, "apple_iphone_14_red");

        // Find all the prefixes and items.
        listAll(storageRef)
            .then((res) => {
                res.prefixes.forEach((folderRef) => {
                    // console.log("folderRef", folderRef._location.path);

                    // All the prefixes under storageRef.
                    // You may call listAll() recursively on them.
                    listAll(folderRef).then((res) => {
                        const separateFolder = [];
                        res.items.forEach((itemRef) => {
                            // All the items under all folders of storageRef
                            getDownloadURL(itemRef).then((downloadURL) => {
                                separateFolder.push(downloadURL);
                                console.log(separateFolder);
                                // console.log("downloadURL", downloadURL);
                            });
                        });
                    });
                });
                res.items.forEach((itemRef) => {
                    // All the items under storageRef.
                    getDownloadURL(itemRef).then((downloadURL) => {
                        console.log("downloadURL", downloadURL);
                    });
                });
            })
            .catch((error) => {
                // Uh-oh, an error occurred!
                console.log(error);
            });
    }

    function getUniqueURLSearchKeys() {
        let searchKeys = [];
        for (const key of searchParams.keys()) {
            if (key !== "_page" && key !== "sort") searchKeys.push(key);
        }
        const uniqueSearchKeys = [...new Set(searchKeys)];

        return uniqueSearchKeys;
    }

    function createUniqueSearchParamsObj() {
        let searchObj = {};
        const uniqueSearchKeys = getUniqueURLSearchKeys();
        uniqueSearchKeys.forEach((searchKey) => {
            searchObj[searchKey] = searchParams.getAll(searchKey);
        });
        return searchObj;
    }

    const pageChangeHandler = (e, value) => {
        searchParams.set("_page", value);
        setSearchParams(searchParams);
    };

    return (
        <Grid className="devices-list" item xs={12} lg={10} pb={3}>
            <DevicesOperations changeGridHandler={changeGridHandler} />
            <Grid container spacing={1}>
                {!isLoading && devices.length === 0 && (
                    <Grid item xs={12}>
                        <Typography variant="h3" align="center">
                            No items found
                        </Typography>
                    </Grid>
                )}
                {!isLoading &&
                    devices.length > 0 &&
                    devices.map((deviceData, index) => <DeviceItem key={index} grid={grid} deviceData={deviceData} />)}
                <DevicesPagination
                    totalPagesNumber={totalPagesNumber}
                    currentPageNumber={Number(currentPageNumber)}
                    pageChangeHandler={pageChangeHandler}
                />
            </Grid>
        </Grid>
    );
};

export default DevicesList;
