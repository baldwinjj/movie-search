import actions from './actions'

const OMDB_URL = 'https://www.omdbapi.com/'
const API_KEY = '9f572b90'

const searchMovies = (query, page=1) => (dispatch) => {
    dispatch(actions.searchMoviesRequest())
    if (page === 1) dispatch(actions.clearSearchResults())
    fetch(`${OMDB_URL}?r=json&apikey=${API_KEY}&page=${page}&s=${query}`)
        .then(r => r.json())
        .then(r => {
            if(r.Response === 'True') {
                dispatch(actions.searchMoviesSuccess(r, query))
            } else {
                dispatch(actions.searchMoviesFailure())
            }
        })
}

export default {
    searchMovies
}