import { Routes, Route, Outlet, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Root from "./routes/root";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Root />} />
      </Routes>
    </>
  );
};

export default App;
