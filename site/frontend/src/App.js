import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Donate from './Pages/Donate';
import ErrorPage from './Pages/ErrorPage';
import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import NewsDetails from './Pages/NewsDetails';


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/support-us" element={<Donate />} />
          <Route path="/news-and-updates" element={<NewsDetails />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
