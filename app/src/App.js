import Container from '@mui/material/Container';
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './App.css';
import { RequireAuth } from './components/Auth/RequireAuth/RequireAuth';
import RequireForAuthPerson from './components/Auth/RequireAuth/RequireForAuthPerson';
import SignIn from './components/Auth/SignIn/SignIn';
import SignUp from './components/Auth/SignUp/SignUp';
import Main from './components/Main/Main';
import NavBar from './components/NavBar/NavBar';
import PostDetail from './components/PostDetail/PostDetail';
import PostsList from './components/PostsList/PostsList';
import PostForm from './components/PostForm/PostForm';

const themeLight = createTheme({
  palette: {
    primary: {
      main: '#b3e5fc',
    },
    secondary: {
      main: '#5c6bc0',
    },
  },
  })

function App() {
  return (
    <ThemeProvider theme={themeLight}>
      <CssBaseline />
    <BrowserRouter>
      <NavBar />
      <Container maxWidth="md" className="container">
        <Routes>
        <Route
            path="/"
            element={(
              <RequireForAuthPerson>
                <Main />
              </RequireForAuthPerson>
            )}
            />
          <Route path="/posts" element={
            <RequireAuth>
             <PostsList />
            </RequireAuth>} />
          <Route path="/posts/:_id" element={
            <RequireAuth>
              <PostDetail/>
            </RequireAuth>} />
          <Route path="/postform" element={
            <RequireAuth>
              <PostForm/>
            </RequireAuth>} />
          <Route path="/signin" 
          element={(
          <RequireForAuthPerson>
          <SignIn />
          </RequireForAuthPerson>
          )} 
          />
          <Route path="/signup"
          element={(
            <RequireForAuthPerson>
            <SignUp  />
            </RequireForAuthPerson>
           )}  
          />
        </Routes>
      </Container>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
