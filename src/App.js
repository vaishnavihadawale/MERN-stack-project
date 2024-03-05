import "./App.css";

import { Navbar } from "./component/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { Login } from "./component/Login/Login";
import { Footer } from "./component/Footer/Footer";
import { Home } from "./component/Home/Home";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
