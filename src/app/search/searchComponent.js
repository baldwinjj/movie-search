import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
})

class SearchComponent extends React.Component {
    constructor(props) {
        super(props)
        this.classes = props.classes
        this.state = {query: ''}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({query: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSearch(this.state.query)
    }

    render() {
        return (
            <div className={this.classes.root}>
            <AppBar position="fixed">
              <Toolbar>
                <Typography className={this.classes.title} variant="h6" color="inherit" noWrap>
                  Movie Search
                </Typography>
                <div className={this.classes.grow} />
                <form onSubmit={this.handleSubmit} className={this.classes.search}>
                  <div className={this.classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search…"
                    onChange={this.handleChange}
                    value={this.state.query}
                    classes={{
                      root: this.classes.inputRoot,
                      input: this.classes.inputInput,
                    }}
                  />
                </form>
              </Toolbar>
            </AppBar>
          </div>
        )
    }
}

SearchComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchComponent);