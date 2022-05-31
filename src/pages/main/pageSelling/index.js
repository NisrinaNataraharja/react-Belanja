import React from 'react'
import style from './pageSelling.module.css'
import { NavbarAfterLogin} from '../../../components/index'
import { Button, Input } from '../../../components/index'
import Levi from '../../../assets/img/levi2.jpg'

const index = () => {
    return (
        <>
            <NavbarAfterLogin />
            <main>
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
                    <div className="col-sm-8 ">
                        <div className="card">
                            <div className="card-body-right p-4">
                                <section className={style["main-form"]}>
                                    <h1 className="my-profile">Inventory</h1>
                                    <hr />
                                    <p>Name of goods</p>
                                    <Input type="text" className="input-form" />
                                </section>
                            </div>
                        </div>
                        <div className="col-sm-12 ">
                            <div className="card">
                                <div className="card-body-right p-4">
                                    <section className={style["main-form"]}>
                                        <h1 className="my-profile">Item detail</h1>
                                        <hr />
                                        <p>Unit price</p>
                                        <Input type="text" className="input-form" />
                                        <p>Stock</p>
                                        <section className="parent">
                                            <Input id="stock" type="text" className="input-form" /><p id="stock">Buah</p>
                                        </section>
                                        <p>Stock</p>
                                        <section className="input-form hidden p-0">
                                            <Input type="radio" name="baru" checked /><label className="gender" for="baru">Baru</label>
                                            <Input type="radio" name="bekas" /><label className="gender" for="bekas">Bekas</label>
                                        </section>
                                    </section>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 ">
                            <div className="card">
                                <div className="card-body-right p-4">
                                    <section className={style["main-form"]}>
                                        <h1 className="my-profile">Photo of goods</h1>
                                        <hr />

                                        <hr />
                                        <Button className="select-image center">Upload Photo</Button>
                                    </section>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 ">
                            <div className="card">
                                <div className="card-body-right p-4">
                                    <section className={style["main-form"]}>
                                        <textarea className="text-desc" name="" id="" cols="30" rows="10">
                                        </textarea>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default index