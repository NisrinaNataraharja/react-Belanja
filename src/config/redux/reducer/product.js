const initialState = {
    products: [],
    productsId: [],
    searchProduct: [],
    querySearch: ''

}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_PRODUCT":
        return {
          ...state,
          products: action.payload,
        };
        case "GET_SEARCH":
        return {
          ...state,
          searchProduct: action.payload,
        };
        case "QUERY_SEARCH":
        return {
          ...state,
          querySearch: action.payload,
        };
        case "GET_PRODUCT_ID":
          return {
            ...state,
            productsId: action.payload,
          };
        // case "CREATE_PRODUCT":
        // return {
        //   ...state,
        //   products: action.payload,
        // };
        case "UPDATE_PRODUCT":
        return {
          ...state,
          products: action.payload,
        };
      default:
        return state;
    }
  };
 
  export default productReducer;
