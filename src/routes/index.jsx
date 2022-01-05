import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home'
import Session from '../pages/Session'
import Seats from '../pages/Seats'
import Success from '../pages/Success'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}  />
                <Route path='/sessoes/:MovieId' element={<Session/>} />
                <Route path="/assentos/:SessionId" element={<Seats/>} />
                <Route path='/sucesso' element={<Success/>} />
            </Routes>
        </BrowserRouter>
        )
}