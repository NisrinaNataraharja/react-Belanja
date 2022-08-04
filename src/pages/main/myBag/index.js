import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './myBag.module.css'
import { Button } from '../../../components/index'
import { NavbarAfterLogin } from '../../../components/index'
import { getCart } from '../../../config/redux/actions/cartAction'
import { useDispatch, useSelector } from "react-redux";
import Jas from '../../../assets/img/jas.png'
import axios from 'axios'

const MyBag = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { mycart } = useSelector((state) => state.bag);
    console.log(mycart.length);
    const [quantity, setQuantity] = useState('0')
    const token = localStorage.getItem('token')
    let sumPrice = 0
    for (let i = 0; i < mycart.length; i++) {
        sumPrice += mycart[i].price * mycart[i].quantity
    }

    const deleteCart = async (cartId) => {
        try {
            await axios.delete(`${process.env.REACT_APP_URL_API}cart/${cartId}`, {
                "content-type": "multipart/form-data",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setQuantity(1)
            dispatch(getCart());
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        dispatch(getCart());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <div className={style["main"]}>
                <NavbarAfterLogin />
                <div className="container">
                    <h1 className={style["title"]}>My Bag</h1>
                    <div className="row">
                        <div className="col-sm-7 mb-4">
                            <div className={style["card"]}>
                                <div className="card-body p-0 p-4">
                                    <div className="d-flex justify-content">
                                        <div className={style["select"]}>
                                            <input className={style["check"]} type="checkbox" />

                                        </div>
                                        <p className={style["selected"]}>Select all items <span className={style["selected"]}>(2 items selected)</span></p>
                                        <span className={style["delete"]}>Delete</span>
                                    </div>
                                </div>
                            </div>
                            {mycart.length > 0 && mycart.map((item) => (
                                <div className="card mt-3">
                                    <div className={style["card"]}>
                                        <div className="card-body p-0 p-4">
                                            <div className={style["productone"]}>
                                                <div className="d-flex align-items-center">
                                                    <input className={style["check"]} type="checkbox" />
                                                    <img className={style["productone-img"]} src={item.image ? item.image : Jas} alt="suite" />
                                                    <div className={style["brand"]}>
                                                        <h5>{item.nameproduct}</h5>
                                                        <p>{item.brand}</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center count-product">
                                                    <div className={style["circle"]}>-</div>
                                                    <p className={style["sum"]}>1</p>
                                                    <div className={style["circle"]}>+</div>
                                                </div>
                                                <p className={style["price"]}>Rp. {item.price}</p>
                                                <p className={style["del"]} onClick={() => deleteCart(item.cartId)} > Delete</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            ))}

                        {/* <div className="card mt-3">
                                <div className={style["card"]}>
                                    <div className="card-body p-0 p-4">
                                        <div className={style["productone"]}>
                                            <div className="d-flex align-items-center">
                                                <input className={style["check"]} type="checkbox" />
                                                <img className={style["productone-img"]} src={Jas} alt="suite" />
                                                <div className={style["brand"]}>
                                                    <h5>Men's formal suit - Black</h5>
                                                    <p>Zalora</p>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center count-product">
                                                <div className={style["circle"]}>-</div>
                                                <p className={style["sum"]}>1</p>
                                                <div className={style["circle"]}>+</div>
                                            </div>
                                            <p className={style["price"]}>$ 20.0</p>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                    </div>
                    <div className="col-sm-5 mb-4">
                        <div className={style["card"]}>
                            <div className="card-body-right p-4">
                                <h3 className={style["card-summary"]}>Shopping summary</h3>
                                <h5 className={style["price"]}>Total price<span className="d-flex justify-content-end">{`Rp. ` + (sumPrice)}</span></h5>
                                <Button onClick={() => navigate('/checkout')} title='Buy' btn='btn-buyNew' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default MyBag