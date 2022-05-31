import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "../../pages/auth/Login";
import Register from "../../pages/auth/Register";
import Home from "../../pages/main/Home";
import PageSelling from '../../pages/main/pageSelling'
import Product from '../../pages/main/detailProduct'
import MyBag from '../../pages/main/myBag'
import Checkout from '../../pages/main/checkout'
import Profile from '../../pages/main/profile'


function App() {
    return (
        <BrowserRouter>
            <Routes>  
                <Route exact path="/" element={<Home/>}/>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/pageSelling" element={<PageSelling />} />
                <Route path="/detailProduct" element={<Product />} />
                <Route path="/myBag" element={<MyBag />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;