import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home'
import Session from '../pages/Session'
// import Section from '../pages/Section'
// import Success from '../pages/Success'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}  />
                <Route path='/sessoes/:id' element={<Session/>} />
                {/* <Route path="/sessao/:id" element={Section} />
                <Route path="/sucesso" element={Success} /> */}
            </Routes>
        </BrowserRouter>
        )
}