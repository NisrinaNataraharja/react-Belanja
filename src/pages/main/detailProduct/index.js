import React, { Component } from 'react'
import style from './detailProduct.module.css'
import { useNavigate } from 'react-router-dom'
import { NavbarBeforeLogin, Button } from '../../../components/index'
import Sepatuak from '../../../assets/img/cruzrone-shoe-atas-kiri.png'
import Sepatuakn from '../../../assets/img/cruzrone-shoe-atas-kanan.png'
import Sepatubwhk from '../../../assets/img/cruzrone-shoe-bawah-kiri.png'
import Sepatubwhkn from '../../../assets/img/cruzrone-shoe-bawah-kanan.png'
import Star from '../../../assets/img/Star.png'


class DetailProduct extends Component {
    render() {

        return (
            <>
                <NavbarBeforeLogin />
                <div className="container mt-5">
                    <h3 className={style["h3"]}>Home  category  Shoes</h3>
                    <div className="row">
                        <div className="col-sm-3 mb-4">
                            <div className="card">
                                <div className="card-body p-0">
                                    <img className={style["card-img"]} src={Sepatuak} alt="sepatu" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 mb-4">
                            <div className="card">
                                <div className="card-body p-0">
                                    <img src={Sepatuakn} alt="sepatu" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-5 ">
                            <div className={style["side-detail"]}>
                                <h4 className={style["side-detail-h4"]}>Nike CruzrOne (Bright Crimson)</h4>
                                <h3 className={style["h3"]}>Nike</h3>
                                <div className={[["d-flex"], style["rate"]].join(" ")}>
                                    <img src={Star} className={style["checked"]} />
                                    <img src={Star} className={style["checked"]} />
                                    <img src={Star} className={style["checked"]} />
                                    <img src={Star} className={style["checked"]} />
                                    <img src={Star} className={style["checked"]} />
                                    <p className={style["rate-p"]}>(10)</p>
                                </div>
                                <div>
                                    <h3 className={style["h3"]}>Price</h3>
                                    <p className={style["price-side"]}>$ 20.0</p>
                                </div>
                                <div className={style["color"]}>
                                    <h3 className={style["h3"]}>Color</h3>
                                    <div className="colors d-flex">
                                        <div className={style["circle"]} style={{ background: "#1A1A1A" }}></div>
                                        <div className={style["circle"]} style={{ background: " #D84242" }}></div>
                                        <div className={style["circle"]} style={{ background: " #4290D8" }}></div>
                                        <div className={style["circle"]} style={{ background: "#42D86C" }}></div>
                                    </div>
                                </div>
                                <div className='d-flex mr-5'>
                                    <h3 className={style["h3-s"]}>Size</h3>
                                    <h3 className={style["h3-s"]}>Jumlah</h3>
                                </div>
                                <div className="d-flex align-items-center count-product">
                                    <div className={style["circle"]}>-</div>
                                    <p className={style["sum"]}>1</p>
                                    <div className={style["circle"]}>+</div>
                                    <div className={[["d-flex align-items-center count-product"], style["count"]].join(" ")}>
                                        <div className={style["circle"]}>-</div>
                                        <p className={style["sum"]}>1</p>
                                        <div className={style["circle"]}>+</div>
                                    </div>
                                </div>
                                <div className='d-flex mt-5'>
                                    <Button onClick={''} title='Chat' btn='btn-signup-nav' />
                                    <Button onClick={''} title='Add Bag' btn='btn-signup-nav' />
                                </div>
                                <Button onClick={''} title='Buy' btn='btn-buy' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-1">
                    <div className="row">
                        <div className="col-sm-3 mb-4">
                            <div className="card">
                                <div className="card-body p-0">
                                    <img src={Sepatubwhk} alt="sepatu" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 mb-4">
                            <div className="card">
                                <div className="card-body p-0">
                                    <img src={Sepatubwhkn} alt="sepatu" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style["detail-p"]}>
                        <h1 className={style["detail-h1"]}>Informasi Product</h1>
                        <h4 className={style["detail-h4"]}>Condition</h4>
                        <h4 className={[["mb-5"], style["new"]].join(" ")}>New</h4>
                        <h4 className={style["detail-h4"]}>Description</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            <br /><br /><br />
                            Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat. Pellentesque a consequat mauris, vel suscipit ipsum.
                            Donec ac mauris vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl at, ornare suscipit magna.
                            <br /><br />
                            Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis.
                            <br /><br />
                            In ultricies rutrum tempus. Mauris vel molestie orci.
                        </p>
                    </div>
                    <hr />
                </div>
            </>
        )
    }

}

export default DetailProduct