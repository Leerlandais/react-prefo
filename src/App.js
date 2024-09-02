
import './App.css';

// My Components
import Footer from './components/Footer';
import Header from "./components/Header";
import ImageMe from "./components/ImageMe";
import HomePage from "./pages/Home";
// My Pages


function App() {
  return (
      <div className="App">
        <Header />
        <h2>Home</h2>
        <ImageMe />
          <HomePage />

      <Footer />
      </div>
  );
}

export default App;
