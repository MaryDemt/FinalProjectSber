import Container from '@mui/material/Container';
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './App.css';
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
          <Route path="/" element={<Main />} />
          <Route path="/posts/:_id" element={<PostDetail/>} />
          <Route path="/postform" element={<PostForm />} />
        </Routes>
      </Container>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
