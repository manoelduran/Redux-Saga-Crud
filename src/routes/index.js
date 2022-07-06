import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import AddEditUser from "../pages/AddEditUser";
import Home from "../pages/Home";
import UserInfo from "../pages/UserInfo";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addUser" element={<AddEditUser />} />
            <Route path="/editUser/:id" element={<AddEditUser />} />
            <Route path="/userInfo/:id" element={<UserInfo />} />
            <Route path="/about" element={<About />} />
        </ Routes>
    )
}

export default Router;