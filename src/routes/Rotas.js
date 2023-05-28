import React from "react";
import {Route, BrowserRouter, Routes} from "react-router-dom";
import {Home} from "../views/Home"
import {About} from "../views/About"

export const Rotas = () => {
    return(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
    )
 }