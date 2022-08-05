import React, {useEffect, useState} from 'react'
import style from '../pageSelling/pageSelling.module.css'
import {NavbarAfterLogin} from '../../../components/index'
import Levi from '../../../assets/img/levi2.jpg'
import { Button } from '../../../components/index'
import axios from 'axios'

const Profile = () => {
    const [profile, setProfile] = useState({})
    useEffect(() => {
        const token = localStorage.getItem('token')
        axios
            .get(`${process.env.REACT_APP_URL_API_HEROKU}user/profile`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then((res) => {
                console.log(res);
                setProfile(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  return (
    <>
    <NavbarAfterLogin/>
    <div className="row pe-5">
        <div className="col-sm-4 ">
            <div className={style["sidebar"]}>
                <div className={style["name"]}>
                <img className={style['avatar']} src={Levi} alt="avatar" />
                    <h4 className='me-5 pe-5 pt-2'>{profile.name}</h4>
                </div>
                <div className={style["side-detail"]}>
                    <h4>My account</h4>
                    <h4>Shipping Adress</h4>
                    <h4>My order</h4>
                </div>
            </div>
        </div>
        <div className="col-sm-8 mb-4">
            <div className="card mt-5">
                <div className="card-body-right p-4">
                    <h3 className="card-summary">My Profile</h3>
                    <h5>Manage your profile information</h5>
                    <hr/>
                </div>
                <div className="row">
                    <div className="col-sm-3 mb-4">
                        <div className="detail-left">
                            <h5>profile</h5>
                            <h5>Email</h5>
                            <h5>Phone Number</h5>
                            <h5>Gender</h5>
                            <h5>Date of birth</h5>
                        </div>
                    </div>
                    <div className="col-sm-4 mb-4">
                        <div className="detail-mid">
                            <input className={`${style.inputData} mb-5 mt-3 text-center`} type="text" placeholder={profile.name}/>
                            <input className={`${style.inputData} mb-5 mt-2 text-center`} type="email" placeholder={profile.email}/>
                            <input className={`${style.inputData} mb-5 mt-2 text-center`} type="text" placeholder={profile.phone}/>
                        </div>
                        <div className="radiobox mb-5 mt-4 text-center`}">
                            <input type="radio" id="male"/>
                            <label for="male" className='me-4 ms-2'>Laki-laki</label>
                            <input type="radio" id="female"/>
                            <label for="female" className='me-3 ms-2'>Perempuan</label>
                        </div>
                        <div className="birth-date">
                            <input className={`${style.inputData} mb-5 mt-2 text-center`} type="date" placeholder="1"/>
                        </div>
                        <div className="save">
                        <Button btn='btn-login-nav' title='Save' />
                        </div>
                    </div>
                    
                    {/* <div className="col-sm-4 mb-4">
                    <div className="vl"></div>
                        <div className="detail-right p-4">
                            <img className="avatar-right" src="./assets/images/icon/avatar_icon.png" alt="avatar" />
                            <button>Select Images</button>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Profile