import React from "react";
import { Checkbox, FormControlLabel } from "@mui/material";

const FilterOption = ({ filterCategoryName, filterValue, checked, onChange }) => {
    return (
        <FormControlLabel
            name={filterCategoryName}
            control={<Checkbox size="small" checked={checked} onChange={onChange} />}
            label={filterValue}
        />
    );
};

export default FilterOption;
