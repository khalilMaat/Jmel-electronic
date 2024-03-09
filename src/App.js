import React from "react";
import { Route, Routes } from 'react-router-dom';
import Ejmel from "./components/ejmelHome/Ejmel";
import Laptop from "./components/ejmelFilter/laptopCollection";
import Phone from "./components/ejmelFilter/smartPhoneCollection";

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Ejmel />} />
        <Route path="/laptop" element={<Laptop />} />
        <Route path="/smartPhone" element={<Phone/>} />
      </Routes>
      
      
    </div>
  );
}

export default App;
