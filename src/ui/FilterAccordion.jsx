import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

const FilterAccordion = () => {
    return (
        <>
            {/* --- ACCORDION START --- */}
            <Accordion elevation={3}>
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
                    <Typography variant="h6">Brands</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ pt: 0, pb: 0 }}>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox size="small" />} label="Apple" />
                        <FormControlLabel control={<Checkbox size="small" />} label="Samsung" />
                    </FormGroup>
                </AccordionDetails>
            </Accordion>
            {/* --- ACCORDION FINISH --- */}

            {/* --- ACCORDION START --- */}
            <Accordion elevation={3} sx={{ p: "10px 0" }}>
                <AccordionSummary
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
                    <Typography variant="h6" component="h6">
                        Series
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ pt: 0, pb: 0 }}>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox size="small" />} label="15 Pro Max" />
                        <FormControlLabel control={<Checkbox size="small" />} label="Galaxy S" />
                        <FormControlLabel control={<Checkbox size="small" />} label="15 Pro Max" />
                        <FormControlLabel control={<Checkbox size="small" />} label="Galaxy S" />
                        <FormControlLabel control={<Checkbox size="small" />} label="15 Pro Max" />
                        <FormControlLabel control={<Checkbox size="small" />} label="Galaxy S" />
                        <FormControlLabel control={<Checkbox size="small" />} label="15 Pro Max" />
                        <FormControlLabel control={<Checkbox size="small" />} label="Galaxy S" />
                    </FormGroup>
                </AccordionDetails>
            </Accordion>
            {/* --- ACCORDION FINISH --- */}

            {/* --- ACCORDION START --- */}
            <Accordion elevation={3} sx={{ p: "10px 0" }}>
                <AccordionSummary
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
                    <Typography variant="h6">Colors</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ pt: 0, pb: 0 }}>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox size="small" />} label="Black" />
                        <FormControlLabel control={<Checkbox size="small" />} label="White" />
                        <FormControlLabel control={<Checkbox size="small" />} label="Black" />
                        <FormControlLabel control={<Checkbox size="small" />} label="White" />
                        <FormControlLabel control={<Checkbox size="small" />} label="Black" />
                        <FormControlLabel control={<Checkbox size="small" />} label="White" />
                        <FormControlLabel control={<Checkbox size="small" />} label="Black" />
                        <FormControlLabel control={<Checkbox size="small" />} label="White" />
                        <FormControlLabel control={<Checkbox size="small" />} label="Black" />
                        <FormControlLabel control={<Checkbox size="small" />} label="White" />
                    </FormGroup>
                </AccordionDetails>
            </Accordion>
            {/* --- ACCORDION FINISH --- */}
        </>
    );
};

export default FilterAccordion;
