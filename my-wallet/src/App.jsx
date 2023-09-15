import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from "react";
import {PRIVATE,} from "./config/routes/paths";
import {LoginForm} from "./sections/auth/LoginForm";
import Home from "./components/Home";

export default function App() {
  return (
      <LoginForm>
          <BrowserRouter>
              <Routes>
                  <Route  path={PRIVATE} element={<Home/>} />
              </Routes>
          </BrowserRouter>
      </LoginForm>
  )
}

