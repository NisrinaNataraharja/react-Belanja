import React, { useEffect, useState } from 'react'
import { NavbarBeforeLogin } from '../../../components/index'
import style from './home.module.css'
import Jas from '../../../assets/img/jas.png'
import Star from '../../../assets/img/Star.png'
import axios from 'axios'


const Home = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const url = `${process.env.REACT_APP_URL_API}products/`
        axios.get(url)
            .then(function (response) {
                setData(response.data.data)

            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    return (
        <>
            <NavbarBeforeLogin />
            <div className="container">
                <div className={style['contain']}>
                    <h1>New</h1>
                    <h3>You’ve never seen it before!</h3>
                </div>
                <div className="row">
                    {data.length >= 1 && data.map((item, index) => {
                        const image = item.image
                        const array = JSON.parse(image);
                        console.log(array[0]);
                        return (
                            <div key={index} className="col-sm-2 mb-4">
                                <div className="card">
                                    <div className={style["card-body"]} >
                                        <img src={array.length > 0 ?
                                            array[0] : Jas} alt="jas" />
                                        <h3 className={style["card-title"]}>{item.nameproduct}</h3>
                                        <h5 className={style["price"]}>{item.price}</h5>
                                        <p className={style["brand"]}>{item.brand}</p>
                                        <div className={style["rating"]}>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Home