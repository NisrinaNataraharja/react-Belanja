import axios from "axios";

export const getProduct = () => async (dispatch) => {
    try {
        const result = await axios.get(`${process.env.REACT_APP_URL_API}products/`)
        const products = result.data.data
        dispatch({ type: "GET_PRODUCT", payload: products })
        console.log(products);
    } catch (error) {
        console.log(error);
    }
}

export const getSearchProduct = (search) => async (dispatch) => {
    try {
        const result = await axios.get(`${process.env.REACT_APP_URL_API}products?search=${search}`)
        const products = result.data.data
        dispatch({ type: "GET_SEARCH", payload: products })
        console.log(products);
    } catch (error) {
        console.log(error);
    }
}

export const createProduct = (formData, navigate) => (dispatch) => {
    dispatch({ type: "CREATE_PRODUCT" });
    axios.post(`${process.env.REACT_APP_URL_API}products/`, formData)
        .then(res => {
            console.log('post success', res);
            navigate("/");
        })
        .catch(err => {
            console.log('err', err);
        })
};

// export const createProduct = (formData, navigate) => async(dispatch) => {
//     try {
//         dispatch({type: 'CREATE_PRODUCT'})
//         const result = await axios.post(`${process.env.REACT_APP_URL_API}user/register`, formData)
//         const products = result.data
//         console.log(result.data);
//         dispatch({type: 'CREATE_PRODUCT', payload: products})
//         navigate('/')
//     } catch (error) {
//         console.log(error);
//     }
// }

// export const registerUser = (dataForm, navigate)=> async(dispatch)=>{
//     try {
//         dispatch({type: 'USER_REGISTER_PENDING'})
//         const result = await axios.post(`${process.env.REACT_APP_URL_API}user/register`, dataForm)
//         const user = result.data
//         console.log(result.data);
//         dispatch({type: 'USER_REGISTER_SUCCESS', payload: user})
//         navigate('/login')

//     } catch (error) {
//         console.log(error);
//     }
// }
