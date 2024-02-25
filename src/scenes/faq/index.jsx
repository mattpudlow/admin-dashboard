import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions" />
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography color={colors.greenAccent[500]} variant="h5">What is the purpose of this site?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        The purpose of this site is to provide a simple and clean dashboard for users to manage their team, contacts, and invoices.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography color={colors.greenAccent[500]} variant="h5">How can I add a new team member?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        To add a new team member, navigate to the "Team" page and click the "Add New" button. Fill out the form and click "Save".
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography color={colors.greenAccent[500]} variant="h5">How do I create a new invoice?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        To create a new invoice, navigate to the "Invoices" page and click the "Add New" button. Fill out the form and click "Save".
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default FAQ;





