import { combineReducers } from 'redux'
import searchReducer from './app/search/duck/reducers'

const rootReducer = combineReducers({
    search: searchReducer
})

export default rootReducer