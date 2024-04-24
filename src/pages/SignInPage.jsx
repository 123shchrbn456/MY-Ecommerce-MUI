import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useSignInMutation } from "../features/authentication/authenticationSlice";
import { Button, Divider, TextField, Grid, Box, Typography, Container, Stack } from "@mui/material";

export default function SignInPage() {
    const navigate = useNavigate();

    const [signIn, { isError }] = useSignInMutation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const formData = { email: data.get("email"), password: data.get("password") };
        const { email, password } = formData;
        const { data: user } = await signIn({ email, password });
        if (user) {
            console.log("You are logged in");
            navigate("/devices?category=smartphones&_page=1");
        }
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
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, mb: 2 }}>
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
                    </Box>
                </Box>
            </Container>
        </Grid>
    );
}
