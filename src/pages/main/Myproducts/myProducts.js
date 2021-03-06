import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavbarAfterLogin, CardProduct } from '../../../components/index'
import { getProduct } from '../../../config/redux/actions/productAction'
import style from '../pageSelling/pageSelling.module.css'
import { useNavigate, Link } from 'react-router-dom'
import { Button, Input } from '../../../components/index'
import Levi from '../../../assets/img/levi2.jpg'
import { createProduct } from '../../../config/redux/actions/productAction'
import { deleteProduct, getProductById } from '../../../config/redux/actions/productAction'


const myProducts = () => {
  const dispatch = useDispatch()
  const { products } = useSelector((state) => state.product)
  console.log(products);
  useEffect(() => {
    dispatch(getProduct())
  }, [])

  const navigate = useNavigate()

  const handleDelete = (e, id) => {
    e.preventDefault();
    // console.log(id);
    dispatch(deleteProduct(id))
    .then(()=> dispatch(getProduct()))
  }

  const handleEdit = (e, id) =>{
    e.preventDefault();
  // console.log(id);
   dispatch(getProductById(id))
   .then(()=> navigate("/updateProduct") )
  }
  

  return (
    <>
      <div className={style['main']}>
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
                  <h4 onClick={() => navigate("/myProducts")}>My Product</h4>
                  <h4>Order</h4>
                </div>
              </div>
            </div>
            <div className="col-sm-8 mt-4">
              <div className="card">
                <div className="card-body-right p-4 ">
                  <section className={style["main-form"]}>
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">No</th>
                          <th scope="col">Product</th>
                          <th scope="col">Update</th>
                          <th scope="col">Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {products.length > 0 && products.map((item) => (
                          <tr>
                            <th scope="row">{item.id}</th>
                            <td>{item.nameproduct}</td>
                            <td><button onClick={(e) => handleEdit(e, item.id)} className="btn btn-primary">Edit</button>
                              {/* <Link to={"/updateProduct"} className="btn btn-primary">Edit</Link> */}</td>
                            <td><button onClick={(e) => handleDelete(e, item.id)} className="btn btn-danger">Delete</button></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}


export default myProducts