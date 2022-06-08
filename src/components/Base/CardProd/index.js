import React from 'react'
import { useDispatch } from 'react-redux'
import style from './card.module.css'
import { Button } from '../../../components'
import {deleteProduct, getProduct} from '../../../config/redux/actions/productAction'

export default function CardProduct({
    image,
    nameproduct,
    price,
    brand,
    Key,
    id
}) {
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(deleteProduct(id))
        getProduct()
    }

    return (
        <>
            <div className="col-sm-2 mb-4">
                <div className={[["card"], style["cards"]].join(" ")} key={Key}>
                    <div className={style["card-body"]} >
                        <div className={style["img-div"]}>
                            <img className={style['imgproduct']} src={image} alt="jas" />
                        </div>
                        <h3 className={style["card-title"]}>{nameproduct}</h3>
                        <h5 className={style["price"]}>Rp. {price}</h5>
                        <p className={style["brand"]}>{brand}</p>

                        <div className={style["rating"]}>
                            <Button btn='btn btn-danger d-flex justify-content-center mb-3' title='Delete' onClick={(e) => handleSubmit(e)} >{id}</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

// {style['imgproduct']}