import React from 'react'
import style from '../Navbar-before-login/navbar.module.css'
import { useNavigate } from 'react-router-dom'
import { Input, Button } from '../../index'
import Belanja from '../../../assets/img/blanja.png'
import Cart from '../../../assets/img/shopping-cart.png'
import Bell from '../../../assets/img/bell.png'
import Sort from '../../../assets/img/sort_icon.png'
import Avatar from '../../../assets/img/levi2.jpg'
import Mail from '../../../assets/img/mail.png'
import Search from '../../../assets/img/Search.png'



const NavbarAfterLogin  = () => {
    const navigate = useNavigate()
    return (
        <>
            <nav className="navbar-expand-lg ">
                <div className={style['navbar']} >
                    <div className="container-fluid ">
                        <div className="d-flex">
                            <div className={style['brand-main']}>
                                <img className={style['logoimg']} src={Belanja} alt='belanja-logo' onClick={() => navigate('/')} />
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
                                            <Input className={[["me-2"], style["form-control"]].join(" ")} type="search" placeholder="    Search" aria-label="Search" />
                                            <img className={style['inputSearch-img']} src={Search} alt="search" />
                                        </div>
                                    </form>
                                    <a className={style["sort"]} aria-current="page" href="#"><img className={style['sort-img']} src={Sort}
                                        alt="sort_icon" /></a>
                                </div>
                                <div className={style["nav-item"]}>
                                    <img className={style['cart']} src={Cart} onClick={() => navigate('/myBag')} />
                                    <img className={style['bell']} src={Bell} onClick={() => navigate('/myBag')} />
                                    <img className={style['mail']} src={Mail} onClick={() => navigate('/myBag')} />
                                    <img className={style['avatar']} src={Avatar} onClick={() => navigate('/profile')} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavbarAfterLogin 