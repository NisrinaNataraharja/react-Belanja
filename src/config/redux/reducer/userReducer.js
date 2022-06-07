const initialState = {
    user: {
        name: '',
        email: '',
        password: '',
        phone: '',
        nameStore: '',
        role: ''
    },
    isLoading: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "USER_REGISTER_PENDING":
            return {
                ...state,
                isLoading: true
            };
        case "USER_REGISTER_SUCCESS":
            return {
                ...state,
                isLoading: true
            };
        case "USER_LOGIN_PENDING":
            return {
                ...state,
                isLoading: true
            };
        case 'USER_LOGIN_SUCCESS':
            return {
                ...state,
                user: action.payload,
                isLoading: false
            };
        default:
            return state;
    }
};
// const userReducer = (state = initialState, action) => {

//     if (action.type === 'USER_LOGIN_PENDING') {
//         return {
//             ...state,
//             isLoading: true
//         }
//     } else if (action.type === 'USER_LOGIN_SUCCESS') {
//         return {
//             ...state,
//             user: action.payload,
//             isLoading: false
//         }
//     } else {
//         return state
//     }
// }

export default userReducer