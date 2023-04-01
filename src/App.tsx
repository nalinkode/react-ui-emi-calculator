import React from 'react';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Calculator from './components/Calculator/Calculator';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Calculator />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
