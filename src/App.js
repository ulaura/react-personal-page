import React from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Portfolio from './components/Portfolio'
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';



const App = () => {
  return (
    <Router>
      <div>
        <Grid>
          <div>
            <h1 className="text-center">Laura Unaeze</h1>
            <h2 className="text-center">Software Developer</h2>
            <Navigation />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/contact" component={Contact} />
              {/* Added a catch-all path to redirect Home */}
              <Route exact path="*" component={Home} />
              {/* Dummy link. It will eventually lead to a page with extra projects */}
              <Route exact path="#" component={Portfolio} />
            </Switch>
          </div>

          <Row>
            <Col lg={12} className="footer">
              <p>&#169; Copyright 2018 Laura Unaeze</p>
            </Col>
          </Row>
        </Grid>
      </div>
    </Router>
  );
};


export default App;
