import { Routes, Route, Outlet, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Root from "./routes/root";
import NotFound from "./routes/NotFound";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
