import React from "react";
import FilterOption from "./FilterOption";
import { useSearchParams } from "react-router-dom";

const FilterOptionContainer = ({ filterCategoryName, filterValue }) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const isCheckboxShouldBeChecked = (key, filterValue) => {
        key === "mainCamera_Features" ? (key += "_like") : key;
        const booleanResult = searchParams.getAll(key).includes(filterValue) ? true : false;
        return booleanResult;
    };

    const onChangeFilterInputs = (e) => {
        // переделывать для mainCamera_Features
        const isChecked = e.target.checked;
        filterCategoryName === "mainCamera_Features" ? filterCategoryName + "_like" : filterCategoryName;

        // Add One more to this exact array or Add completely new param
        if (isChecked) {
            searchParams.append([filterCategoryName], [filterValue]);
            setSearchParams(searchParams);
            return;
        }

        // Delete completely param array or delete one param of the array
        if (!isChecked) {
            searchParams.delete(filterCategoryName, filterValue);
            setSearchParams(searchParams);
            return;
        }
    };

    return (
        <FilterOption
            filterCategoryName={filterCategoryName}
            filterValue={filterValue}
            onChange={onChangeFilterInputs}
            checked={isCheckboxShouldBeChecked(filterCategoryName, filterValue)}
        />
    );
};

export default FilterOptionContainer;
