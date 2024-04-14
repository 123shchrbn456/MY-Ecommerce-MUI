import { useSearchParams } from "react-router-dom";
import { Grid } from "@mui/material";
import { useGetFilteringDataFromFirebaseQuery } from "../features/devices/devicesSlice";
import SingleFilterAccordion from "../features/filter/SingleFilterAccordion";

const FilterAccordions = () => {
    const [searchParams] = useSearchParams();
    const urlCategoryValue = searchParams.get("category");
    const urlBrandValues = searchParams.getAll("brand");

    const { data: generatedFilteringDataFromFirebase, isLoading } = useGetFilteringDataFromFirebaseQuery({
        urlCategoryValue,
        urlBrandValues,
    });

    return (
        <Grid item xs={12} lg={2}>
            {!isLoading ? (
                Object.keys(generatedFilteringDataFromFirebase).map((filterCategoryName, index) => (
                    <SingleFilterAccordion
                        key={index}
                        filterCategoryName={filterCategoryName}
                        filterCategoryValues={generatedFilteringDataFromFirebase[filterCategoryName]}
                    />
                ))
            ) : (
                <div>Loading filters...</div>
            )}
        </Grid>
    );
};

export default FilterAccordions;
