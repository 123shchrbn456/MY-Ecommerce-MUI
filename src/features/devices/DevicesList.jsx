import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Grid } from "@mui/material";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { PAGE_SIZE } from "../../utils/constants";

import DevicesOperations from "./DevicesOperations";
import DeviceItem from "./DeviceItem";
import { useGetDevicesFromFirebaseQuery } from "./devicesSlice";

const DevicesList = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [grid, setGrid] = useState({ xs: 6, sm: 6, md: 4, lg: 4, xl: 3 });

    const { xs, sm, md, lg, xl } = grid;
    const isPaginationActive = searchParams.get("_page");

    const { data: devices, isLoading, isSuccess } = useGetDevicesFromFirebaseQuery(createUniqueSearchParamsObj());

    console.log("Devices:", devices);
    useEffect(() => {
        if (!isPaginationActive) {
            searchParams.set("_page", 1);
            searchParams.set("_limit", PAGE_SIZE);
            setSearchParams(searchParams);
        }
    }, []);

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
            if (key !== "_page" && key !== "_limit") searchKeys.push(key);
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
        // console.log(searchObj);
        return searchObj;
    }

    return (
        <Grid className="devices-list" item xs={12} lg={10} spacing={1} pb={3}>
            <DevicesOperations changeGridHandler={changeGridHandler} />
            <Grid container spacing={1} xs={12}>
                {!isLoading && devices.map((deviceData, index) => <DeviceItem key={index} grid={grid} deviceData={deviceData} />)}
            </Grid>
        </Grid>
    );
};

export default DevicesList;
