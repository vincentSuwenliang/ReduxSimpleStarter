import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// BrowserRouter interact with History
import promise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';

class Hello extends React.Component {
  render() {
    return <div>Hello</div>
  }
}
class Goodbye extends React.Component {
  render() {
    return <div>Goodbye</div>
  }
}

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        nihao
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/" component={PostsIndex} />
          {/* this is just a component; path regex mathch; the sequence matters!  */}
          
        </Switch>
        
        <Route path="/posts/:id" component={Goodbye} />
        
      </div>
      
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
