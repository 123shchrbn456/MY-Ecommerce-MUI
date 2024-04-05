import * as React from "react";
import { Button, TextField, Grid, Box, Typography, Container, Divider, Stack } from "@mui/material";

export default function SignIn() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        });
    };

    return (
        <Grid item xs={12} mt={-2} pb={3}>
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        paddingTop: 4,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField required fullWidth id="lastName" label="Last Name" name="lastName" autoComplete="family-name" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                        </Grid>
                        <Button to="#" type="submit" fullWidth variant="contained" sx={{ mt: 2, mb: 2 }}>
                            Sign Up
                        </Button>
                        <Divider />
                        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1} m={1}>
                            <Typography variant="subtitle1">Already have an account?</Typography>
                            <Button to="/sign-in" variant="contained" size="small" color="secondary" sx={{ width: 160 }}>
                                Sign In
                            </Button>
                        </Stack>
                    </Box>
                </Box>
            </Container>
        </Grid>
    );
}
