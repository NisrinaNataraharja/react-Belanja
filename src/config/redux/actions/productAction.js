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
            navigate("/myProducts");
        })
        .catch(err => {
            console.log('err', err);
        })
};

export const deleteProduct = (id) => async (dispatch) => {
    await axios.delete(`${process.env.REACT_APP_URL_API}products/${id}`)
        .then((res) => {
            dispatch({ type: 'DELETE_PRODUCT', payload: res.data.data });
            alert("delete success", res);
            getProduct()
        });

};
