import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from './myBag.module.css'
import { Button, Input } from '../../../components/index'
import { NavbarAfterLogin } from '../../../components/index'
import Jas from '../../../assets/img/jas.png'

const MyBag = () => {
    const navigate = useNavigate()
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
                                        <div className={style["select "]}>
                                            <input className={style["check"]} type="checkbox" />
                                            Select all items <span className={style["selected"]}>(2 items selected)</span>
                                        </div>
                                        <span className={style["delete"]}>Delete</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-3">
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
                            </div>
                            <div className="card mt-3">
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
                            </div>
                        </div>
                        <div className="col-sm-5 mb-4">
                            <div className={style["card"]}>
                                <div className="card-body-right p-4">
                                    <h3 className={style["card-summary"]}>Shopping summary</h3>
                                    <h5 className={style["price"]}>Total price<span className="d-flex justify-content-end">$ 40.0</span></h5>
                                    <Button onClick={() => navigate('/checkout')} title='Buy' btn='btn-buy' />
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