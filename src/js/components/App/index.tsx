import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { getItems } from '../../actions';
import helpers from '../../helpers';
import List from '../List';
import ErrorBoundary from './ErrorBoundary';
import './index.scss';

interface HelloProps { compiler: string; framework: string; }

type Props = {
  isLoading: boolean,
  compiler: string,
  framework: string,
  hasErrored: boolean,
  items: Array<any>,
  fetchData: (url: string, query?: string) => void

};

export class App extends Component<Props> {

  componentDidMount() {
    this.props.fetchData(`${helpers.routes.base}/movies`);
  }

  if (isLoading: boolean) {
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

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    fetchData: (url: string, query?: string) => dispatch(getItems(url, query)),
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
