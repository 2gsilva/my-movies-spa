import React from "react";
import {Route, BrowserRouter, Routes} from "react-router-dom";
import {Home} from "../views/Home"
import {About} from "../views/About"
import { Details } from "../views/Details";

export const Rotas = () => {
    return(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/about" element={<About />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </BrowserRouter>
    )
 }