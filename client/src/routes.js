import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import FamilyTreePage from "./pages/FamilyTree";
import Test from "./pages/Test";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Tree" element={<FamilyTreePage />} />
            <Route path="/Test" element={<Test />} />
        </Routes>
    );
}

export default AppRoutes;