import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

const FilterAccordion = () => {
    return (
        <>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{
                        // "&.Mui-expanded": {
                        //     minHeight: 0,
                        // },
                        "& .MuiAccordionSummary-content": {
                            margin: 0,
                        },
                        "& .MuiAccordionSummary-content.Mui-expanded": {
                            margin: 0,
                        },
                    }}
                >
                    <Typography variant="h6" align="center" sx={{ width: "100%" }}>
                        Brands
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="Apple" sx={{ justifyContent: "center" }} />
                        <FormControlLabel control={<Checkbox />} label="Samsung" />
                    </FormGroup>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{
                        "& .MuiAccordionSummary-content": {
                            margin: 0,
                        },
                        "& .MuiAccordionSummary-content.Mui-expanded": {
                            margin: 0,
                        },
                    }}
                >
                    <Typography variant="h6">Series</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="15 Pro Max" />
                        <FormControlLabel control={<Checkbox />} label="Galaxy S" />
                    </FormGroup>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{
                        "& .MuiAccordionSummary-content": {
                            margin: 0,
                        },
                        "& .MuiAccordionSummary-content.Mui-expanded": {
                            margin: 0,
                        },
                    }}
                >
                    <Typography variant="h6">Colors</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="Black" />
                        <FormControlLabel control={<Checkbox />} label="White" />
                    </FormGroup>
                </AccordionDetails>
            </Accordion>
        </>
    );
};

export default FilterAccordion;
