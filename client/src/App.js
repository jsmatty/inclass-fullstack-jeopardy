import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Game from './components/Game';
import AddCategory from './components/AddCategory';



class app extends Component {
  render() {
    return (
      <Router>
        <div>
         <div>
          <link to="/">Home</link>
          <link to="/add-categories">Add Category</link>

          </div>
          <div>
            <Route exact path= "/" component={Home} />
            <Route path= "/add-categories" component={AddCategory} />
            <Route path= "/game/:gameId" component={Game} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
