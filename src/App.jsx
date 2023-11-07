import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import {
  Container,
  InputGroup,
  FormControl,
  Row,
  Card,
  Button,
} from "react-bootstrap";
import { ClientID, ClientSecret } from "./components/ListGroup";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
