import { combineReducers } from 'redux'
import types from './types'

const searchMoviesReducer = (state={Search: [], totalResults: 0}, action) => {
    switch(action.type) {
        case types.SEARCH_MOVIES_REQUEST:
            return state
        case types.SEARCH_MOVIES_SUCCESS:
            return { Search: [...state.Search, ...action.payload.Search], totalResults: action.payload.totalResults, query: action.query }
        case types.CLEAR_SEARCH_RESULTS:
            return {...state, Search: [], totalResults: 0}
        default:
            return state
    }
}

const searchUIReducer = (state=false, action) => {
    switch(action.type) {
        case types.SEARCH_MOVIES_REQUEST:
            return true
        case types.SEARCH_MOVIES_FAILURE:
            return false
        case types.SEARCH_MOVIES_SUCCESS:
            return false
        default:
            return state
    }
}

const reducer = combineReducers({
    movies: searchMoviesReducer,
    loading: searchUIReducer
})

export default reducer