import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Paper } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { signUpQuery } from "../../../redux/actions/personAC";

export default function SignUp() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  let from = location.state?.from?.pathname || "/";
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    dispatch(
      signUpQuery({
        email: data.get("email"),
        password: data.get("password"),
        cb: () => {
          navigate(from, { replace: true });
        },
      })
    );
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: "100%",
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        my: 'auto',
        mt: '10px'
      }}
    >
      <Paper variant="outlined">
        <Box
          sx={{
            my: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1, px: 4 }}
          >
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}