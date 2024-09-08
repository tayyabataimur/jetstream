import { Routes, Route, Outlet, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Root from "./routes/root";
import NotFound from "./routes/NotFound";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import AircraftCharter from "./components/AircraftCharter";
import AboutUs from "./components/About";
import Parts from "./components/Parts";
import ScrollToTop from "./hooks/scrollToTop";
const App = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/aircraftcharter" element={<AircraftCharter />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/parts" element={<Parts />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
