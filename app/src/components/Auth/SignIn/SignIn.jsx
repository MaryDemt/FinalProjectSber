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
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { signInQuery } from "../../../redux/actions/personAC";

export default function SignIn() {
  //localStorage.clear()
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  let from = location.state?.from?.pathname || "/";
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    dispatch(
      signInQuery({
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
        my: 'auto'
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
            Sign in
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
              sx={{ mt: 2, mb: 1}}
            >
              Sign In
            </Button>
            </Box>
            <Container
      maxWidth="sm"
      sx={{
        minHeight: "100%",
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        my: 'auto' }}
        >
            <Box sx={{
              display: "flex",
        justifyContent: "center"}}> 
        or
          </Box>
          < Box
            component="form"
            noValidate
            sx={{ mt: 0, px: 1, minWidht: "100%" }} >
          <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 1 }} >
          <Link to={'/signup'}>Sign Up </Link>
          </Button>
          </Box>
          </Container>
        </Box>
          
      </Paper>
     
    </Container>
  );
}
