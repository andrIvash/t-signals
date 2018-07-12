import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../../actions';
import List from '../List';
import ErrorBoundary from './ErrorBoundary';
import './index.scss';

interface HelloProps { compiler: string; framework: string; }

export class App extends Component<HelloProps, {}> {

  componentDidMount() {
    this.props.fetchData(`${helpers.routes.base}/movies`);
  }

  if (isLoading) {
      return (
        <div className="wrapper">
          <div className="appInner">
            <ErrorBoundary> 
              <p className='loading'>Loading…</p>
            </ErrorBoundary>
          </div>
        </div>    
      )
  }
  
  render() {
      const { items } = this.props;
      return (
        <div className="wrapper">
          <div className="appInner"> 
            <ErrorBoundary>
              <h1 className="title">Hello from {this.props.compiler} and {this.props.framework}!</h1>
              <List items={items}/>
            </ErrorBoundary>
          </div>
        </div>
      )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url, query) => dispatch(getItems(url, query)),
    //onFilmSelect: id => dispatch(selectFilm(id)),
  };
};

const mapStateToProps = state => {
  return {
      items: state.items,
      hasErrored: state.itemsHasErrored,
      isLoading: state.itemsIsLoading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
