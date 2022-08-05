import React from 'react'
import style from './card.module.css'
import Star from '../../../assets/img/Star.png'

export default function Card({
    image,
    nameproduct,
    price,
    brand,
    Key,
    click
}) {
    return (
        <>
            <div className="col-sm-2 mb-4">
                <div className={[["card"], style["cards"]].join(" ")} key={Key}>
                    <div className={style["card-body"]} >
                        <div className={style["img-div"]}>
                            <img className={style['imgproduct']} src={image} alt="jas" />
                        </div>
                        <h3 className={style["card-title"]} onClick={click}>{nameproduct}</h3>
                        <h5 className={style["price"]}>{price}</h5>
                        <p className={style["brand"]}>{brand}</p>
                        <div className={style["rating"]}>
                            <img src={Star} className={style["checked"]} />
                            <img src={Star} className={style["checked"]} />
                            <img src={Star} className={style["checked"]} />
                            <img src={Star} className={style["checked"]} />
                            <img src={Star} className={style["checked"]} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

// {style['imgproduct']}