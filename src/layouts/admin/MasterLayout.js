import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Routes, Route } from "react-router-dom";
import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts.js';
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Footer from "./Footer";
import CategoryList from "./category/List";
import CategoryCreate from "./category/Create";
const MasterLayout = () => {
    return (
        <div className="sb-nav-fixed">
            <Navbar />
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Sidebar />
                </div>
                <div id="layoutSidenav_content">
                    <main>
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/categories/create" element={<CategoryCreate />} />
                            <Route path="/categories" element={<CategoryList />} />
                            <Route path="/profile" element={<Profile />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default MasterLayout;