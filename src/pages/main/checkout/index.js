import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import style from '../myBag/myBag.module.css'
import Jas from '../../../assets/img/jas.png'
import { Button, NavbarAfterLogin } from '../../../components/index'
import { useSelector, useDispatch } from "react-redux";
import { getCart } from '../../../config/redux/actions/cartAction'
import { FormatRupiah } from "@arismun/format-rupiah";
import axios from "axios";
import Swal from 'sweetalert2'

const Checkout = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [profile, setProfile] = useState({})
    const { mycart } = useSelector((state) => state.bag);
    // const { user } = useSelector((state) => state.user)
    console.log(mycart);
    const token = localStorage.getItem('token')
    let sumPrice = 0
    for (let i = 0; i < mycart.length; i++) {
        sumPrice += mycart[i].price * mycart[i].quantity
    }
    const handleClick = () =>{
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Checkout Berhasil Silahkan Lakukan Pembayaran!",
            showConfirmButton: true,
          });
          navigate("/");
        
    }

    useEffect(() => {
        dispatch(getCart());
        axios
            .get(`${process.env.REACT_APP_URL_API_HEROKU}user/profile`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then((res) => {
                console.log(res);
                setProfile(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
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
                                        <h4 className={style["address-main"]}>{profile.name}</h4>
                                        <div>
                                            <p className={style["address-p"]}>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa
                                                Tengah, 53181 [Belanja Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
                                            <input className={style["input-address"]} type="text" placeholder="Choose another address" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {mycart.length > 0 && mycart.map((item, index) => (
                                <div className={[["mt-3"], style["card"]].join(" ")} key={index}>
                                    <div className="card-body p-0 p-4">
                                        <div className={style["productone"]}>
                                            <div className="d-flex align-items-center">
                                                <img className={style["productone-img"]} src={item.image ? item.image : Jas} alt="suite" />
                                                <div className={style["brand"]}>
                                                    <h5>{item.nameproduct}</h5>
                                                    <p>{item.brand}</p>
                                                </div>
                                            </div>
                                            <p className={style["price"]}>{<FormatRupiah value={item.price} />}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {/* <div className={[["mt-3"], style["card"]].join(" ")}>
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
                            </div> */}
                        </div>
                        <div className="col-sm-5 mb-4">
                            <div className={style["card"]}>
                                <div className="card-body-right p-4">
                                    <h3 className={style["card-summary"]}>Shopping summary</h3>
                                    <h5 className={style["price"]}>Order<span className="d-flex justify-content-end">{<FormatRupiah value={(sumPrice)} />}</span></h5>
                                    <h5 className={style["price"]}>Delivery<span className="d-flex justify-content-end">Free delivery</span></h5>
                                    <h3 className={[["mt-5"], style["card-summary"]].join(" ")}><hr /> Shopping summary <span className="d-flex justify-content-end">{<FormatRupiah value={(sumPrice)} />}</span></h3>
                                    <select className="form-select w-100 mt-3 mb-2" >
                                        <option>Select Payment</option>
                                        <option value="BRI">BRI</option>
                                        <option value="BCA">BCA</option>
                                        <option value="Mandiri">Gopay</option>
                                        <option value="OVO">Dana</option>
                                    </select>
                                    <Button onClick={() => handleClick()} title='Checkout' btn='btn-buyNew' />
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