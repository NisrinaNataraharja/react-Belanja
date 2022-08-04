const initialState = {
    mycart: [],
    isLoading: false
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CART_PENDING":
          return {
            ...state,
            isLoading: true
          };
          case "GET_CART_SUCCESS":
            return {
              ...state,
              mycart: action.payload,
              isLoading: false
            };
          default:
            return state
      }
    };
    
    export default cartReducer;