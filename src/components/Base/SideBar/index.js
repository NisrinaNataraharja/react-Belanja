import React from 'react'
import style from './sidebar.modul.css'
import Levi from '../../../assets/img/levi2.jpg'

const SideBar = () => {
    return (
    
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
   
    )
}

export default SideBar