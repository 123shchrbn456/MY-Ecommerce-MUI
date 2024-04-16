import { useNavigate } from "react-router-dom";
import { useSignUpMutation } from "../features/authentication/authenticationSlice";
import { Button, TextField, Grid, Box, Typography, Container, Divider, Stack } from "@mui/material";

export default function SignUpPage() {
    const navigate = useNavigate();
    const [signUp, { isLoading, isError }] = useSignUpMutation();

    const submitHandler = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const formData = {
            name: data.get("name"),
            email: data.get("email"),
            password: data.get("password"),
        };

        try {
            await signUp({ formData });
            console.log("You are signed up");
            navigate("/devices?category=smartphones&_page=1");
        } catch (error) {
            console.error(error.message);
            console.log("Something went wrong with registration");
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
                        Sign up
                    </Typography>
                    <Box component="form" onSubmit={submitHandler} noValidate sx={{ mt: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField required fullWidth id="name" label="Name" name="name" autoComplete="name" />
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
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, mb: 2 }}>
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
