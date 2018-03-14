import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Portfolio from './components/Portfolio'
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';



const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Grid>
          <h1 className="text-center">Laura Unaeze</h1>
          <h2 className="text-center">Software Developer</h2>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            {/* Added a catch-all path to redirect Home */}
            <Route exact path="*" component={Home} />
          </Switch>

          <div className="footer">
            <p>&#169; Copyright 2018 Laura Unaeze</p>
          </div>
        </Grid>
      </div>
    </Router>
  );
};


export default App;
