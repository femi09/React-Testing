import React from "react";
import { Routes, Route } from "react-router-dom";
import { NewPersonPage } from "./NewPerson/NewPersonPage";
import { HomePage } from "./HomePage/HomePage";


export default function App() {
  return (
    <Routes>
      <Route path="newperson" element={<NewPersonPage />} />
      <Route exact path="/" element={<HomePage />}/>
        
      <Route path="*" element={<p>Oops, page not found!</p>}/>
    
    </Routes>
  );
}
