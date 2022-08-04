import React, { useEffect } from 'react'
import style from './detailProduct.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { NavbarBeforeLogin, Button } from '../../../components/index'
import { getProductById } from '../../../config/redux/actions/productAction'
import {addCart} from '../../../config/redux/actions/cartAction'
import Sepatuak from '../../../assets/img/cruzrone-shoe-atas-kiri.png'
import Star from '../../../assets/img/Star.png'


const DetailProduct = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { productsId } = useSelector((state) => state.product)
    // console.log(productsId);

    const handleAddBag = async (detailProductId, navigate) => {
        const data = {
          productId: detailProductId,
          quantity: 1,
        };
        addCart(data, navigate);
      };

    useEffect(() => {
        dispatch(getProductById(id));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <NavbarBeforeLogin />
            <div className="container mt-5">
                {/* <h3 className={style["h3"]}>Home  category  Shoes</h3> */}
                <div className="row">
                    <div className="col-sm-3 mb-4">
                        <div className="card">
                            <div className={style["card-body"]}>
                                <img className={style["card-img"]} src={productsId.image ? productsId.image : Sepatuak} alt="sepatu" />
                            </div>
                        </div>
                        <div className="card mt-2">
                            <div className={style["card-body"]}>
                                <img className={style["card-img"]} src={productsId.image ? productsId.image : Sepatuak} alt="sepatu" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 mb-4">
                        <div className="card">
                            <div className={style["card-body"]}>
                                <img className={style["card-img"]} src={productsId.image ? productsId.image : Sepatuak} alt="sepatu" />
                            </div>
                        </div>
                        <div className="card mt-2">
                            <div className={style["card-body"]}>
                                <img className={style["card-img"]} src={productsId.image ? productsId.image : Sepatuak} alt="sepatu" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-5 ">
                        <div className={style["side-detail"]}>
                            <h4 className={style["side-detail-h4"]}>{productsId.nameproduct ? productsId.nameproduct : "-"}</h4>
                            <h3 className={style["h3"]}>{productsId.brand ? productsId.brand : "-"}</h3>
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
                                <p className={style["price-side"]}>Rp. {productsId.price ? productsId.price : 0}</p>
                            </div>
                            <div className={style["color"]}>
                                <h3 className={style["h3"]}>Color</h3>
                                <div className="colors d-flex">
                                    <div className={style["circle"]} style={{ background: "#1A1A1A" }}></div>
                                    <div className={style["circle"]} style={{ background: " #D84242", marginLeft: "5px" }}></div>
                                    <div className={style["circle"]} style={{ background: " #4290D8", marginLeft: "5px" }}></div>
                                    <div className={style["circle"]} style={{ background: "#42D86C", marginLeft: "5px" }}></div>
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
                                <Button onClick={()=> handleAddBag(productsId.id, navigate)} title='Add Bag' btn='btn-signup-nav' />
                            </div>
                            <Button onClick={()=> navigate('/checkout')} title='Buy' btn='btn-buy' />
                        </div>
                    </div>
                    {/* <div className="row">
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
                                        <img className={style["card-img"]} src={Sepatuak} alt="sepatu" />
                                    </div>
                                </div>
                            </div>
                        </div> */}
                </div>
            </div>
            <div className="container mt-1">

                <div className={style["detail-p"]}>
                    <h1 className={style["detail-h1"]}>Informasi Product</h1>
                    <h4 className={style["detail-h4"]}>Condition</h4>
                    <h4 className={[["mb-5"], style["new"]].join(" ")}>New</h4>
                    <h4 className={style["detail-h4"]}>Description</h4>
                    <br />
                    <p>
                    {productsId.description ? productsId.description : '-'}
                    </p>
                </div>
                <hr />
            </div>
        </>
    )
}


export default DetailProduct