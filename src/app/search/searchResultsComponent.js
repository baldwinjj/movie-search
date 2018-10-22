import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import missingImage from './assets/404.jpeg'

const styles = theme => ({
    root: {
        marginTop: '65px',
        padding: '0',
        listStyle: 'none',
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'center'
    },
    movie: {
        width: '300px',
        height: '450px',
        padding: '5px',
        position: 'relative'
    },
    poster: {
        display: 'block',
        maxWidth: '300px',
        maxHeight: '450px',
        width: 'auto',
        height: '100%'
    },
    details: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute',
        background: 'rgba(0, 0, 0, .5)',
        opacity: 0,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Roboto',
        '&:hover': {
            opacity: 1
        }
    }
});

function SearchResultsComponent(props) {
  const { classes } = props
  
  window.onscroll = () => {
      if ( props.loading || props.movies.Search.length === props.movies.totalResults) return
      if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
          props.onSearch(props.movies.query, (props.movies.Search.length / 10) + 1)
      }
  }

  return (
      <ul className={classes.root}>
          {props.movies.Search.map((movie, idx) => (
              <li className={classes.movie} key={idx}>
                <div className={classes.details}>
                    <h1>{movie.Title}</h1>
                    <h2>{movie.Year}</h2>
                </div>
                <img className={classes.poster} src={movie.Poster} alt={movie.Title} onError={(e) => e.target.src = missingImage}/>
              </li>
          ))}
      </ul>
  );
}

SearchResultsComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchResultsComponent);