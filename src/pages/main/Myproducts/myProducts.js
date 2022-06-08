import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavbarAfterLogin, CardProduct } from '../../../components/index'
import { getProduct } from '../../../config/redux/actions/productAction'
import style from '../Home/home.module.css'
import Jas from '../../../assets/img/jas.png'

const myProducts = () => {
  const dispatch = useDispatch()
  const { products } = useSelector((state) => state.product)
  console.log(products);
  useEffect(() => {
    dispatch(getProduct())
  }, [])

  
  return (
    <>
      <NavbarAfterLogin />
      <div className="container">
        <div className={style['contain']}>
          <h1>My Products</h1>
          <h3>List product here</h3>
        </div>
        <div className="row">
          {products.length >= 1 && products.map((item) => {
            const image = item.image
            const array = JSON.parse(image);
            return (
              <CardProduct key={item.id}
                image={array.length > 0 ?
                  array[0] : Jas} alt="jas"
                nameproduct={item.nameproduct}
                price={item.price}
                brand={item.brand}
                id={item.id}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}


export default myProducts