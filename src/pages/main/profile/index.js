import React from 'react'
import style from '../pageSelling/pageSelling.module.css'
import {NavbarAfterLogin} from '../../../components/index'
import Levi from '../../../assets/img/levi2.jpg'

const Profile = () => {
  return (
    <>
    <NavbarAfterLogin/>
    <div class="row pe-5">
        <div class="col-sm-4 ">
            <div class={style["sidebar"]}>
                <div class={style["name"]}>
                <img className={style['avatar']} src={Levi} alt="avatar" />
                    <h4>Levi Ackerman</h4>
                </div>
                <div class={style["side-detail"]}>
                    <h4>My account</h4>
                    <h4>Shipping Adress</h4>
                    <h4>My order</h4>
                </div>
            </div>
        </div>
        <div class="col-sm-8 mb-4">
            <div class="card mt-5">
                <div class="card-body-right p-4">
                    <h3 class="card-summary">My Profile</h3>
                    <h5>Manage your profile information</h5>
                    <hr/>
                </div>
                <div class="row">
                    <div class="col-sm-3 mb-4">
                        <div class="detail-left">
                            <h5>Name</h5>
                            <h5>Email</h5>
                            <h5>Phone Number</h5>
                            <h5>Gender</h5>
                            <h5>Date of birth</h5>
                        </div>
                    </div>
                    <div class="col-sm-4 mb-4">
                        <div class="detail-mid">
                            <input type="text" placeholder="Johanes Mikael"/>
                            <input type="email" placeholder="johanes@gmail.com"/>
                            <input type="number" placeholder="08901289012"/>
                        </div>
                        <div class="radiobox">
                            <input type="radio" id="male"/>
                            <label for="male">Laki-laki</label>
                            <input type="radio" id="female"/>
                            <label for="female">Perempuan</label>
                        </div>
                        <div class="birth-date">
                            <input type="number" placeholder="1"/>
                            <input type="text" placeholder="Januari"/>
                            <input type="number" placeholder="1990"/>
                        </div>
                        <div class="save">
                            <button>Save</button>
                        </div>
                    </div>
                    <div class="col-sm-4 mb-4">
                        <div class="detail-right p-4">
                            <img class="avatar-right" src="./assets/images/icon/avatar_icon.png" alt="avatar" />
                            <button>Select Images</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Profile