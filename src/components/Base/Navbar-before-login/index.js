import React, { useState } from 'react'
import { Input, Button } from '../../index'
import style from './navbar.module.css'
import Belanja from '../../../assets/img/blanja.png'
import Cart from '../../../assets/img/shopping-cart.png'
import Sort from '../../../assets/img/sort_icon.png'
import Search from '../../../assets/img/Search.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {getSearchProduct} from '../../../config/redux/actions/productAction'

const NavbarBeforeLogin = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // const [search, setSearch] = useState('')

    // const handleSearch = (e) => {
    //    e.preventDefault()
    //    dispatch(getSearchProduct(search))
    //    setSearch('')
    //    navigate('/searchProduct')
       
    // }
    const handleSearch =(e)=>{
        // dispatch({
        //     type:'QUERY_SEARCH',
        //     payload: e.target.value
        // })
        if (e.target.value.length > 0) {
            navigate(`/searchProduct?search=${e.target.value}`)
        }

    }
    return (
        <>
            <nav className="navbar-expand-lg ">
                <div className={style['navbar']} >
                    <div className="container-fluid ">
                        <div className="d-flex">
                            <div className={style['brand-main']}>
                                <img className={style['logoimg']} src={Belanja} alt='belanja-logo' onClick={() => navigate('/')}/>
                                <h1 className={style['brand']}>Belanja</h1>
                            </div>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="navbar-menu collapse navbar-collapse" id="navbarSupportedContent">
                                <div className="d-flex">
                                    <form className="d-flex" role="search">
                                        <div className={style['inputSearch']}>
                                            <Input className={[["me-2 "], style["form-control"]].join(" ")} type="search" placeholder="  Search" aria-label="Search"
                                            onClick={(e)=>handleSearch(e)} />
                                            <img className={style['inputSearch-img']} src={Search} alt="search" />
                                        </div>
                                    </form>
                                    <a className={style["sort"]} aria-current="page" href="#"><img className={style['sort-img']} src={Sort}
                                        alt="sort_icon" /></a>
                                </div>
                                <div className={style["nav-item"]}>
                                    <img className={style['cart']} src={Cart} onClick={() => navigate('/myBag')} />
                                    <Button btn='btn-login-nav' title='Login' onClick={() => navigate('/login')} />
                                    <Button btn='btn-signup-nav' title='Signup' onClick={() => navigate('/register')} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavbarBeforeLogin