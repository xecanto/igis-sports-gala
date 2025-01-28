import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from "./context/ThemeContext";
import { Home } from "./pages/Home";
import { Gallery } from "./pages/Gallery";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
