import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Portfolio from './components/Portfolio'
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";



const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </div>
    </Router>
  );
};


export default App;
