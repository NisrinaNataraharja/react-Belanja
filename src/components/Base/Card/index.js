import React from 'react'
import style from './card.module.css'


export default function Card({
    image,
    nameproduct,
    price,
    brand,
    Key,
}) {
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
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

// {style['imgproduct']}