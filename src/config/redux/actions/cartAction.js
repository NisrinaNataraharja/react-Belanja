import axios from "axios"

export const getCart =  () => async (dispatch) => {
    try {
      const token = localStorage.getItem('token')
      dispatch({type: "GET_CART_PENDING"})
      const myCart = await axios.get(`${process.env.REACT_APP_URL_API}cart`, {
        "content-type": "multipart/form-data",
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      const cart = myCart.data.data
      dispatch({type: "GET_CART_SUCCESS", payload: cart})
    } catch (error) {
      console.log(error);
    }
  }
  
  export const addCart = async (data, navigate) => {
    try {
      const token = localStorage.getItem('token')
      await axios.post(`${process.env.REACT_APP_URL_API}cart`, data, {
        "content-type": "multipart/form-data",
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      navigate('/mybag')
    } catch (error) {
      console.log(error);
    }
  }