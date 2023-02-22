import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import About from "./pages/About/About";
import Atracadores from "./pages/Atracadores/Atracadores";
import Policias from "./pages/Policias/Policias"
import Rehenes from "./pages/Rehenes/Rehenes"
import { UserContextProvider } from "./context/userContext";
import Login from "./pages/Login/Login";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/atracadores" element={<Atracadores />} />
            <Route path="/policias" element={<Policias />} />
            <Route path="/rehenes" element={<Rehenes />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);