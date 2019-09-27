import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'; //react-router-dom for page navigation
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';

const App = () => {
  return (
    <div className='ui container'>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path='/' exact component={StreamList} />
            <Route path='/streams/new' exact component={StreamCreate} />
            <Route path='/streams/edit/:id' exact component={StreamEdit} />
            <Route path='/streams/delete/:id' exact component={StreamDelete} />
            <Route path='/streams/:id' exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;

/**
 * Notes:
 *      BAD Navigation:
 *          Don't use <a href=# /> for react router navigation
 *          Using anchor tags, returns brand new. index.html. Therefore, dumps old HTML file with all data.
 *      Good Nav:
 *          Use <Link to=""> Page </Link>
 *
 *      Three different routers in react router dom
 *
 *      BrowserRouter - Listens to everything after the TLD (top level domain) .com, .edu, .whatever
 *      HashRouter - injects a /#/. Listens to everything after the hash (#) character
 *      MemoryRouter - Doesn't use the URL to track navigation.
 */
