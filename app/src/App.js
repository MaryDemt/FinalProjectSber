import './App.css';
import Container from '@mui/material/Container';
import NavBar from './components/NavBar/NavBar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Main from './components/Main/Main';
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import PostDetail from './components/PostDetail/PostDetail';

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
        </Routes>
      </Container>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
