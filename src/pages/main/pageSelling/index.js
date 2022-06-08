import React, { useEffect, useState } from 'react'
import style from './pageSelling.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { NavbarAfterLogin } from '../../../components/index'
import { Button, Input } from '../../../components/index'
import Levi from '../../../assets/img/levi2.jpg'
import Box from '../../../assets/img/boxProduct.png'
import axios from "axios";
import { createProduct } from '../../../config/redux/actions/productAction'


const pageSelling = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // const [image, setImage] = useState('')
    const [nameproduct, setNameproduct] = useState('')
    const [price, setPrice] = useState('')
    const [stock, setStock] = useState('')
    const [description, setDeskripsion] = useState('')
    // const [imgUrl, setImgUrl] = useState(`${process.env.REACT_APP_URL_API}image/${products.image}`);
   
   
    // const handleImage = (e) => {
    //     const file = e.target.files[0]
    //     setImage(file)
    //     setImgUrl(URL.createObjectURL(file))
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("nameproduct", nameproduct);
        formData.append("price", price);
        formData.append("stock", stock);
        formData.append("description", description);
        // formData.append("image", image);
            dispatch(createProduct(formData, navigate))
          }



    return (
        <>
            <NavbarAfterLogin />
            <main>
                <form onSubmit={handleSubmit}>
                    <div className="row pe-5">
                        <div className="col-sm-4 ">
                            <div className={style["sidebar"]}>
                                <div className={style["name"]}>
                                    <img className={style['avatar']} src={Levi} alt="avatar" />
                                    <h4>Levi Ackerman</h4>
                                </div>
                                <div className={style["side-detail"]}>
                                    <h4>Store</h4>
                                    <h4>Product</h4>
                                    <h4>Order</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-8 mt-4">
                            <div className="card">
                                <div className="card-body-right p-4 ">
                                    <section className={style["main-form"]}>
                                        <h1 className="my-profile">Inventory</h1>
                                        <hr />
                                        <p>Name of goods</p>
                                        <Input type="text" css="input-form" name="nameproduct" value={nameproduct} onChange={(e) => setNameproduct(e.target.value)} />
                                    </section>
                                </div>
                            </div>
                            <div className="col-sm-12 mt-4 ">
                                <div className="card">
                                    <div className="card-body-right p-4">
                                        <section className={style["main-form"]}>
                                            <h1 className="my-profile">Item detail</h1>
                                            <hr />
                                            <p>Unit price</p>
                                            <Input type="text" css="input-form" name="nameproduct" value={price} onChange={(e) => setPrice(e.target.value)} />
                                            <section className="parent">
                                                <p>Stock</p>
                                                <Input type="text" css="input-form" name="nameproduct" value={stock} onChange={(e) => setStock(e.target.value)} />
                                            </section>
                                        </section>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 mt-4">
                                <div className="card">
                                    <div className="card-body-right p-4">
                                        <section className={style["main-form"]}>
                                            <h1 className="my-profile">Photo of goods</h1>
                                            <hr />
                                            <div className="col-sm-3 ms-2 mt-3">
                                                <div className="card card-image">
                                                    <img src={Box} alt="Product-img" className="img-fluid " />
                                                    <div className="card-img-overlay text-white d-flex justify-content-center align-items-center">
                                                        <img src="../image/seling-product/box 5.png" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-center mt-5">
                                                {/* <input className="form-control btn btn-upload" type="file" accept="image/*" onChange={(e) => handleImage(e)} /> */}
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 mt-4">
                                <div className="card">
                                    <div className="card-body-right p-4">
                                        <section className={style["main-form"]}>
                                            <h3>Description</h3>
                                            <textarea className="form-control" rows="10" value={description} onChange={(e) => setDeskripsion(e.target.value)}></textarea>
                                        </section>
                                    </div>
                                </div>
                                <div className="d-flex mt-3">
                                    <div className="col-sm-12 text-end">
                                        <Button btn='btn-sell' title='Jual' type={"submit"} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </main>
        </>
    )
}

export default pageSelling