import {combineReducers} from 'redux'
import productReducer from './product'
import userReducer from './userReducer'

const rootReducer = combineReducers({
    product: productReducer,
    user: userReducer,
})

export default rootReducer