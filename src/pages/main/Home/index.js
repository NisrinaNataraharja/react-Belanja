import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { NavbarBeforeLogin, Card, NavbarAfterLogin } from '../../../components/index'
import { getProduct } from '../../../config/redux/actions/productAction'
import style from './home.module.css'
import Jas from '../../../assets/img/jas.png'
import { FormatRupiah } from "@arismun/format-rupiah";
// import axios from 'axios'


const Home = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { products } = useSelector((state) => state.product)
    console.log(products);
    const token = localStorage.getItem("token")
    const clickDetail =(id)=> {
        navigate(`/detailProduct/${id}`);
    }

    useEffect(() => {
        dispatch(getProduct())
    }, [])


    return (
        <div className={style['main']}>
            {token ? <NavbarAfterLogin/> :  <NavbarBeforeLogin />}
            
            <div className="container">
                <div className={style['contain']}>
                    <h1>New</h1>
                    <h3>You’ve never seen it before!</h3>
                </div>
                <div className="row">
                    {products.length >= 1 && products.map((item) => {
                        // const image = item.image
                        // const array = JSON.parse(image);
                        // console.log(array[0]);
                        return (
                            <Card key={item.id}
                                image={item.image ? item.image : Jas} alt="jas"
                                click={()=>clickDetail(item.id)}
                                nameproduct={item.nameproduct} 
                                price={<FormatRupiah value={item.price} />}
                                brand={item.brand}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
     
    )
}

export default Home