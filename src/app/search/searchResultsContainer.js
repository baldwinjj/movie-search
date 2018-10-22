import { connect } from 'react-redux'
import SearchResultsComponent from './searchResultsComponent'
import { searchOperations } from './duck'

const mapStateToProps = state => {
    const { movies, loading} = state.search
    return { movies, loading }
}

const mapDispatchToProps = dispatch => {
    const onSearch = (query, page) => {
        dispatch(searchOperations.searchMovies(query, page))
    }
    return {
        onSearch
    }
}

const SearchResultsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchResultsComponent)

export default SearchResultsContainer