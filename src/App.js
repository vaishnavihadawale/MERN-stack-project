import "./App.css";
import { Home } from "./component/Home/Home";
import { Navbar } from "./component/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { Login } from "./component/Login/Login";
import { Footer } from "./component/Footer/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
