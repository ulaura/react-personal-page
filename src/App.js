import React from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Portfolio from './components/Portfolio'
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Grid, Row, Col, Image } from 'react-bootstrap';
// importing image to use below with the help of Webpack
// (which comes with using Create React App)
import MyFace from './images/lauraheadshot.jpg';



const App = () => {
  return (
    <Router>
        <Grid>
          <div>
            <Row>
              <Col lg={6} lgOffset={3}>
                <Image 
                  src={MyFace} 
                  alt="It's me, Laura" 
                  responsive={true} 
                  rounded={true}
                  className="myFace" 
                />
                <h1 className="myName">Laura</h1>
                <h1 className="myName">Unaeze</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <h1 className="text-center">Software Developer</h1>
              </Col>
            </Row>

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
    </Router>
  );
};


export default App;
