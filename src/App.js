import "./App.css";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <Navbar />
            <Routes>
               <Route exact path="/" element={<Home />} />
               <Route path="/signup" element={<Signup />} />
               <Route path="/login" element={<Login />} />
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
