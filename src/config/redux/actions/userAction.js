import axios from "axios";

export const loginUser = (dataForm, navigate)=> async(dispatch)=>{
    try {
        dispatch({type: 'USER_LOGIN_PENDING'})
        const result = await axios.post(`${process.env.REACT_APP_URL_API}user/login`, dataForm)
        const user = result.data.data
        localStorage.setItem('token', user.token)
        localStorage.setItem('refreshToken', user.refreshToken)
        dispatch({type: 'USER_LOGIN_SUCCESS', payload: user})
        navigate('/')

    } catch (error) {
        console.log(error);
    }
}

export const registerUser = (dataForm, navigate)=> async(dispatch)=>{
    try {
        dispatch({type: 'USER_REGISTER_PENDING'})
        const result = await axios.post(`${process.env.REACT_APP_URL_API}user/register`, dataForm)
        const user = result.data
        console.log(result.data);
        dispatch({type: 'USER_REGISTER_SUCCESS', payload: user})
        navigate('/login')

    } catch (error) {
        console.log(error);
    }
}

// export const signUp = (data) => (dispatch) => {
//     return new Promise((resolve, reject) => {
//         const Url = process.env.REACT_APP_API_RESTAPI;
//         axios.post(`${Url}users/register`, data)
//             .then((res) => {
//                 resolve(res)
//             })
//             .catch((err) => {
//                 reject(err)
//             })
//     })
// }