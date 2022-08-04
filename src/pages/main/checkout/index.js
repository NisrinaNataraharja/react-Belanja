import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from '../myBag/myBag.module.css'
import Jas from '../../../assets/img/jas.png'
import { Button, NavbarAfterLogin } from '../../../components/index'

const Checkout = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className={style["main"]}>
                <NavbarAfterLogin />
                <div className="container mb-5">
                    <h1 className={style["title"]}>Checkout</h1>
                    <h3 className={style["sub-title"]}>Shipping Adress</h3>
                    <div className="row">
                        <div className="col-sm-7 mb-4">
                            <div className={style["card"]}>
                                <div className="card-body p-0 p-4">
                                    <div className={style["address"]}>
                                        <h4 className={style["address-main"]}>Andreas Jane</h4>
                                        <div>
                                            <p className={style["address-p"]}>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa
                                                Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
                                            <input className={style["input-address"]} type="text" placeholder="Choose another address" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={[["mt-3"], style["card"]].join(" ")}>
                                <div className="card-body p-0 p-4">
                                    <div className={style["productone"]}>
                                        <div className="d-flex align-items-center">
                                            <img className={style["productone-img"]} src={Jas} alt="suite" />
                                            <div className={style["brand"]}>
                                                <h5>Men's formal suit - Black</h5>
                                                <p>Zalora</p>
                                            </div>
                                        </div>
                                        <p className={style["price"]}>$ 20.0</p>
                                    </div>
                                </div>
                            </div>
                            <div className={[["mt-3"], style["card"]].join(" ")}>
                                <div className="card-body p-0 p-4">
                                    <div className={style["productone"]}>
                                        <div className="d-flex align-items-center">
                                            <img className={style["productone-img"]} src={Jas} alt="suite" />
                                            <div className={style["brand"]}>
                                                <h5>Men's formal suit - Black</h5>
                                                <p>Zalora</p>
                                            </div>
                                        </div>
                                        <p className={style["price"]}>$ 20.0</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-5 mb-4">
                            <div className={style["card"]}>
                                <div className="card-body-right p-4">
                                    <h3 className={style["card-summary"]}>Shopping summary</h3>
                                    <h5 className={style["price"]}>Order<span className="d-flex justify-content-end">$ 40.0</span></h5>
                                    <h5 className={style["price"]}>Delivery<span className="d-flex justify-content-end">$ 5.0</span></h5>
                                    <h3 className={[["mt-5"], style["card-summary"]].join(" ")}><hr /> Shopping summary <span className="d-flex justify-content-end">$ 45.0</span></h3>
                                    <Button onClick={() => navigate('/checkout')} title='Select Payment' btn='btn-buyNew' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout