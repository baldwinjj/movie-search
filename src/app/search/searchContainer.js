import { connect } from 'react-redux'
import SearchComponent from './searchComponent'
import { searchOperations } from './duck'

const mapStateToProps = state => {
    const { movies } = state
    return { movies }
}

const mapDispatchToProps = dispatch => {
    const onSearch = (query) => {
        dispatch(searchOperations.searchMovies(query))
    }
    return {
        onSearch
    }
}

const SearchContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchComponent)

export default SearchContainer