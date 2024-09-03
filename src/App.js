
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// My Components
import Footer from './components/Footer';
import Header from "./components/Header";
import Home from "./pages/Home";
import Conclusion from "./pages/Conclusion";
import Enterprise from "./pages/Enterprise";
import Gallery from "./pages/Gallery";
import Interview from "./pages/Interview";
import Musee from "./pages/Musee";
import Err404 from "./pages/Err404";


// My Pages


function App() {
  return (
      <Router>
      <div className="App">
        <Header />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/enterprise" element={<Enterprise />} />
                  <Route path="/interview" element={<Interview />} />
                  <Route path="/musee" element={<Musee />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/conclusion" element={<Conclusion />} />
                  <Route path="*" element={< Err404 />} />
              </Routes>
      <Footer />
      </div>
      </Router>
  );
}

export default App;
