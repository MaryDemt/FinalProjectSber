import Container from '@mui/material/Container';
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  BrowserRouter, Route, Routes, useNavigate
} from "react-router-dom";
import './App.css';
import { RequireAuth } from './components/Auth/RequireAuth/RequireAuth';
import SignIn from './components/Auth/SignIn/SignIn';
import SignUp from './components/Auth/SignUp/SignUp';
import Main from './components/Main/Main';
import NavBar from './components/NavBar/NavBar';
import PostDetail from './components/PostDetail/PostDetail';
import PostForm from './components/PostForm/PostForm';

const themeLight = createTheme({
  palette: {
    primary: {
      main: '#0052cc',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={themeLight}>
      <CssBaseline />
    <BrowserRouter>
      <NavBar />
      <Container maxWidth="md" className="container">
        <Routes>
          <Route path="/" element={
            <RequireAuth>
             <Main />
            </RequireAuth>} />
          <Route path="/posts/:_id" element={
            <RequireAuth>
              <PostDetail/>
            </RequireAuth>} />
          <Route path="/postform" element={
            <RequireAuth>
              <PostForm/>
            </RequireAuth>} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Container>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
