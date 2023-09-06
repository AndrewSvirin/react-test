import React from 'react';             // для использования react
import ReactDOM from 'react-dom';      // чтобы интеграции HTML
import App from './App';
import './index.css'
import AppCont from './AppCont'
import Appinformation from './Appinformation'
import { BrowserRouter, Routes, Route } from "react-router-dom";



ReactDOM.render(

    <BrowserRouter>
        <Routes>
                <Route path='/' element={<App/>} />
                <Route path="/about" element={ <Appinformation /> } />
                <Route path="/contact" element={ <AppCont /> } />
                <Route path="*" element={ <h1>404</h1> } />
        </Routes>
    </BrowserRouter>,
    
    document.getElementById('app')
);