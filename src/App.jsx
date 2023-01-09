import React from "react";
import { Route, Routes } from "react-router-dom";
import Detail from "./components/Detail";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Random from "./components/Random";
import Search from "./components/Search";

function App() {

  return (
    <div className="container-app">
      <Header/>
      <Routes>
          <Route path="/" element={<Search />}/>
          <Route path="/random" element={<Random />}/>
          <Route path="/detail/:id" element={<Detail />}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
