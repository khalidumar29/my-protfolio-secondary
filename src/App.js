import React from "react";

// import components
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackTopBtn from "./components/BackTopBtn";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import ProjectDetails from "./components/ProjectDetails";
const App = () => {
  return (
    <div className='bg-white relative'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path={"/project/:id"} element={<ProjectDetails />}></Route>
      </Routes>
      <Footer />
      <BackTopBtn />
    </div>
  );
};

export default App;
