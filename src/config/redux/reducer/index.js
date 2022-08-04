import {combineReducers} from 'redux'
import productReducer from './product'
import userReducer from './userReducer'
import cartReducer from './cart'

const rootReducer = combineReducers({
    product: productReducer,
    user: userReducer,
    bag: cartReducer,
})

export default rootReducer