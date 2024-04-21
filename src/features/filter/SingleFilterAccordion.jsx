import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, FormGroup } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import FilterOptionContainer from "./FilterOptionContainer";
import { FILTER_ACCORDION_TITLES } from "../../utils/constants";

FILTER_ACCORDION_TITLES;

const SingleFilterAccordion = ({ filterCategoryName, filterCategoryValues }) => {
    // console.log("filterCategoryName:::", filterCategoryName);
    return (
        <Accordion className="my-filter-accordion" elevation={3}>
            <AccordionSummary
                className="my-filter-accordion__summary"
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                    minHeight: 30,
                    "& .MuiAccordionSummary-content": {
                        margin: 0,
                    },
                    "& .MuiAccordionSummary-content.Mui-expanded": {
                        margin: 0,
                    },
                }}
            >
                <Typography variant="h6">{FILTER_ACCORDION_TITLES[filterCategoryName]}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ pt: 0, pb: 0 }}>
                <FormGroup>
                    {filterCategoryValues.map((filterValue, index) => (
                        <FilterOptionContainer key={index} filterCategoryName={filterCategoryName} filterValue={filterValue} />
                    ))}
                    {/* <FormControlLabel control={<Checkbox size="small" onChange={onChangeFilterInputs} />} label="Apple" /> */}
                    {/* <FormControlLabel control={<Checkbox size="small" />} label="Samsung" /> */}
                </FormGroup>
            </AccordionDetails>
        </Accordion>
    );
};

export default React.memo(SingleFilterAccordion);
// export default SingleFilterAccordion;
