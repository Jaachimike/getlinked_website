import Footer from "./properties/Footer";
import Header from "./properties/Header";
import Homepage from "./pages/Homepage";
import { Contact } from "./pages/Contact";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>

      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

    </Router>

  );
}

export default App;
