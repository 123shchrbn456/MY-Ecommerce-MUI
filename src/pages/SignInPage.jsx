import * as React from "react";

import { Button, Divider, TextField, FormControlLabel, Checkbox, Grid, Box, Typography, Container, Stack } from "@mui/material";

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
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button type="submit" to="#" fullWidth variant="contained" sx={{ mt: 2, mb: 2 }}>
                            Sign In
                        </Button>
                        <Divider />
                        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1} m={1}>
                            <Typography variant="subtitle1">Need an account?</Typography>
                            <Button to="/sign-up" variant="contained" size="small" color="secondary" sx={{ width: 160 }}>
                                Sign Up
                            </Button>
                        </Stack>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1} m={1}>
                            <Typography variant="subtitle1">Forgot password?</Typography>
                            <Button to="#" variant="contained" size="small" color="secondary" sx={{ width: 160, textAlign: "center" }}>
                                Recover Password
                            </Button>
                        </Stack>
                        {/* <Grid container>
                            <Grid item xs={6}>
                                <Typography to="#" variant="subtitle1">
                                    Need an account?
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Button to="/sign-up" variant="contained">
                                    Sign Up
                                </Button>
                            </Grid>

                            <Grid item xs={6}>
                                <Typography to="#" variant="subtitle1">
                                    Forgot password?
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Button to="/sign-up" variant="contained">
                                    Recover Password
                                </Button>
                            </Grid>
                        </Grid> */}
                    </Box>
                </Box>
            </Container>
        </Grid>
    );
}
