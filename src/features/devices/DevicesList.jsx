import React, { useEffect, useState } from "react";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    IconButton,
    Typography,
    CardActionArea,
    styled,
    Link,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import BalanceIcon from "@mui/icons-material/Balance";

import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

import { PAGE_SIZE } from "../../utils/constants";

import DevicesOperations from "./DevicesOperations";
import DeviceItem from "./DeviceItem";
import { useGetDevicesFromFirebaseQuery } from "./devicesSlice";

import iphone15Img from "../../images/iphone_15_pro_max_natural_titanium_pdp_image_position-1__ww-en_1.jpeg";
import iphone14Img from "../../images/wwen_iphone14_q422_productred_pdp_image_position-1a_1.jpeg";
import iphone13Img from "../../images/iphone-13-midnight-select-2021.534x728_m_3.jpeg";
import { useSearchParams } from "react-router-dom";

const CardCustomized = styled(Card)({
    "&:hover": {
        boxShadow: "0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12);",
    },
});

const LinkCustomized = styled(Link)({
    color: "black",
});

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
        <Grid className="devices-list" item container xs={12} lg={10} spacing={1} pb={3}>
            <button onClick={getAllImages}>fetchImages</button>
            <DevicesOperations changeGridHandler={changeGridHandler} />
            {!isLoading && devices.map((deviceData, index) => <DeviceItem key={index} grid={grid} deviceData={deviceData} />)}
        </Grid>
    );
};

export default DevicesList;
