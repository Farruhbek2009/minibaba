import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./ui/navbar/navbar";
import Footer from "./ui/footer/footer";

import Home from "./pages/home";
import Login from "./pages/login";
import Detail from "./pages/detail";
import Store from "./pages/store";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail/:slug" element={<Detail />} />
        <Route path="/store/:slug" element={<Store />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;