import React, { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Admin from "./Pages/admin";
import Guest from "./Pages/guest";
import Home from "./Pages/home";
import Student from "./Pages/student";

function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <div className="app-container">
            <Navbar />
            <div className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/guest"
                  element={true ? <Guest /> : <Navigate to="/" />}
                />
                <Route
                  path="/admin"
                  element={true ? <Admin /> : <Navigate to="/" />}
                />
                <Route
                  path="/student"
                  element={true ? <Student /> : <Navigate to="/" />}
                />
              </Routes>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
