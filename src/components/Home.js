import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      <Col lg={5}>
        <h3>About Me</h3>
        <p>
          My drive for development began a few years ago when I first made “Hello World” appear on my screen using basic HTML. 
          The rush I felt in that moment was incredible, and I knew right away I had to learn more.
          I proceeded to learn more about coding through self-study, online resources, and more recently, a continuing education program through the University of Arizona.
        </p>

        <p>
          I quickly realized development is very similar to the creative process I live for. I love taking an idea, bringing it to life, and experiencing the process it takes to get there.
          It’s a pleasure to witness what I am capable of creating and sharing my work with others. 
        </p>  

        <p>
          I enjoy using my development skills to find solutions to people’s issues. Being able to apply my knowledge and experience in development to help others is the piece that makes doing what I love worth it. 
          Thank you for visiting my site. I hope I can be of service to you in the near future!
        </p>
      </Col>

      <Col lg={5} mdOffset={1} lgOffset={1}>
        <h3>Skills</h3>
          <h4>Proficient</h4>
            <p>React, JavaScript, Node, HTML, CSS, Bootstrap</p>
          <h4>Knowledgeable</h4>
            <p>Blah blah blah</p>
          <h4>Learning</h4>
            <p>Yadda yadda</p>
      </Col>
    </div>
  );
};

export default Home;