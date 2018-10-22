import types from './types'

const searchMoviesRequest = () => ({
    type: types.SEARCH_MOVIES_REQUEST
})

const searchMoviesFailure = () => ({
    type: types.SEARCH_MOVIES_FAILURE
})

const searchMoviesSuccess = (payload, query) => ({
    type: types.SEARCH_MOVIES_SUCCESS,
    payload,
    query
})

const clearSearchResults = () => ({
    type: types.CLEAR_SEARCH_RESULTS
})

export default {
    searchMoviesRequest,
    searchMoviesFailure,
    searchMoviesSuccess,
    clearSearchResults
}