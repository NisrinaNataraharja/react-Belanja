import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { NavbarBeforeLogin, Card } from '../../../components/index'
import { getProduct } from '../../../config/redux/actions/productAction'
import style from './home.module.css'
import Jas from '../../../assets/img/jas.png'
// import axios from 'axios'


const Home = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { products } = useSelector((state) => state.product)
    console.log(products);
    const clickDetail =(id)=> {
        navigate(`/detailProduct/${id}`);
    }
    
    // const [data, setData] = useState(products)
    useEffect(() => {
        dispatch(getProduct())
    }, [])

    // useEffect(() => {
    //     const url = `${process.env.REACT_APP_URL_API}products/`
    //     axios.get(url)
    //         .then(function (response) {
    //             setData(response.data.data);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }, [])

    return (
        <div className={style['main']}>
            <NavbarBeforeLogin />
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
                                price={item.price}
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