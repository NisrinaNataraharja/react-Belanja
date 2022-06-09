import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { NavbarBeforeLogin, Card } from '../../../components/index'
import Jas from '../../../assets/img/jas.png'
import style from '../Home/home.module.css'
import { getSearchProduct } from '../../../config/redux/actions/productAction'

const Search = () => {
  const dispatch = useDispatch()
  const [qs] = useSearchParams()
  const { searchProduct } = useSelector((state) => state.product)
  const getSearch = qs.get('search')
  useEffect(() => {
    dispatch(getSearchProduct(getSearch))
  }, [ getSearch])

  return (
    <>
      <div className={style['main']}>
        <NavbarBeforeLogin />
        <div className="container">
          <div className={style['contain']}>
            <h1>Search Result</h1>
            <h3>Is this what you looking for?</h3>
          </div>
          <div className="row">
            {searchProduct.length >= 1 && searchProduct.map((item) => {
              const image = item.image
              const array = JSON.parse(image);
              return (
                <Card key={item.id}
                  image={array.length > 0 ?
                    array[0] : Jas} alt="jas"
                  nameproduct={item.nameproduct}
                  price={item.price}
                  brand={item.brand}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Search