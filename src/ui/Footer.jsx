import styled from "@emotion/styled";
import { Grid, List, ListItemText, Typography, Container, TextField } from "@mui/material";
import { Box } from "@mui/system";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export const FooterTitle = styled(Typography)(() => ({
    textTransform: "uppercase",
    marginBottom: "1em",
}));

export const SubscribeTf = styled(TextField)(() => ({
    ".MuiInputLabel-root": {
        color: "#fff",
    },

    ".MuiInput-root::before": {
        borderBottom: `1px solid #fff`,
    },
}));

export default function Footer() {
    return (
        <Box
            sx={{
                background: "#333",
                color: "#fff",
                // p: { xs: 1, md: 1 },
                fontSize: { xs: "12px", md: "16px" },
            }}
        >
            <Container maxWidth="xxl" xs={{ p: { xs: 1, md: 1 } }}>
                <Grid container spacing={2} mt={0} justifyContent="space-between">
                    <Grid item xs={12} md={5}>
                        <FooterTitle variant="body1">About us</FooterTitle>
                        <Typography variant="caption2">
                            Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm tempor incididunt ut labor et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud.
                        </Typography>
                        <Box
                            sx={{
                                mt: 4,
                                color: "#d5d5d5",
                            }}
                        >
                            <FacebookIcon sx={{ mr: 1 }} />
                            <TwitterIcon sx={{ mr: 1 }} />
                            <InstagramIcon />
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={2}>
                        <FooterTitle variant="body1">information</FooterTitle>
                        <List>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    About Us
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    Privacy &amp; Policy
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    Terms &amp; Conditions
                                </Typography>
                            </ListItemText>
                        </List>
                    </Grid>
                    <Grid item xs={6} md={2}>
                        <FooterTitle variant="body1">Help</FooterTitle>
                        <List>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    FAQ
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    Contact
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    Shipping and Collection
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    Payment Methods
                                </Typography>
                            </ListItemText>
                        </List>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
