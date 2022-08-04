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
import RequireAuth from "../../components/Base/RequireAuth";
import Search from '../../pages/main/Search'
import MyProducts from '../../pages/main/Myproducts/myProducts'
import UpdateProduct from "../../pages/main/Myproducts/updateProduct";

function App() {
    return (
        <BrowserRouter>
            <Routes>  
                <Route exact path="/" element={<Home/>}/>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/pageSelling" element={<RequireAuth><PageSelling /></RequireAuth>} />
                <Route path="/detailProduct/:id" element={<Product/>} />
                <Route path="/myBag" element={<RequireAuth><MyBag /></RequireAuth>} />
                <Route path="/checkout" element={<RequireAuth><Checkout /></RequireAuth>} />
                <Route path="/searchProduct" element={<Search/>} />
                <Route path="/myProducts" element={<RequireAuth><MyProducts /></RequireAuth>} />
                <Route path="/updateProduct" element={<RequireAuth><UpdateProduct /></RequireAuth>} />
                <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;