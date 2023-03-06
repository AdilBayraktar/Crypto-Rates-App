import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import MainNavbar from "./components/MainNavbar";
import AboutPage from "./pages/AboutPage";
import CoinPage from "./pages/CoinPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <MainNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/loader" element={<Loader />} />
        <Route path="/coins/:id" element={<CoinPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
