import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './login.module.css'
import Belanja from '../../../assets/img/blanja.png'
import { Button, Input } from '../../../components/index'
import axios from 'axios'

function Login() {
  const navigate = useNavigate()
  const [activeCostumer, setActiveCostumer] = useState(true)
  const [activeSeller, setActiveSeller] = useState(false)
  const [data, setData] = useState({
    email: "",
    password: "",
  })
  const handleClick = (type) => {
    if (type === "costumer") {
      setActiveCostumer(true)
      setActiveSeller(false)
    } else {
      setActiveCostumer(false)
      setActiveSeller(true)
    }

  }
  const handleChange = (e) => {
    const newData = { ...data }
    newData[e.target.name] = e.target.value
    setData(newData)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const url = `${process.env.REACT_APP_URL_API}user/login`
    console.log(data);
    axios.post(url, data)
      .then(function (response) {
        navigate('/')
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className={style.main}>
      <div className='wrapper'>
        <div className='d-flex justify-content-center'>
          <div className={style['title']} >
            <img src={Belanja} className={style['title-logo']} alt="belanja-icon" />
            <h1 className={style['title-h1']}>Belanja</h1>
          </div>
        </div>
        <div className='d-flex justify-content-center'>
            <div className={style['text']}>Please login with your account</div>
          </div>
        <div className='button d-flex justify-content-center mb-4'>
          <Button btn={activeCostumer === true ? 'btn-active' : 'btn-inactiveSell'} onClick={() => handleClick('costumer')} title='Customer' />
          <Button btn={activeSeller === true ? 'btn-activeSell' : 'btn-inactive'} onClick={() => handleClick('seller')} title='Seller' />
        </div>
        <div>
          <form action="#">
            <div className=''>
              <Input type="email" css="inputAuth" placeholder="Email" name="email" value={data.email} onChange={(e) => handleChange(e)} />
            </div>
            <div className="">
              <Input type="password" css="inputAuth" placeholder="Password" name="password" value={data.password} onChange={(e) => handleChange(e)} />
            </div>
            <div className="">
              <div className="d-flex justify-content-end">
                <div className={style['forgotPass']}><p onClick={() => navigate('/forgotPass')}>Forgot password?</p></div>
              </div>
              <div><Button onClick={(e) => handleSubmit(e)} title='login' btn='btn-login' />
              </div>
              <div className='d-flex justify-content-center'>
                <div className={style['infoHaveAcc']}  >Don't have a Belanja account?<span className={style['infoHaveAcc-span']} onClick={() => navigate('/register')}> Register</span></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login

