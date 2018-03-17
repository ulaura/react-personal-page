import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div>
      {/* The page title is given its own row here so it's not included
          in the alignment for each project row */}
      <Row>
        <Col lg={12}>
          <h3>Portfolio</h3>
        </Col>
      </Row>

      {/* Every two projects should be grouped in a row. */}
      {/* For now I would prefer 4 projects on the page, 
          and the rest pushed off to another page. */}
      <Row>
        <Col lg={5} md={5}>
          <h4>Zen Den</h4>
          <h5>December 2017 - January 2018</h5>
          <p>
            An app that combines multiple tools and resources for effective anxiety management.
            Users are able to select one of three tools &#8212; Breathe, Mood Tracker, and Blog &#8212; to help
            control their anxiety. The Resources page provides additional information on each tool, plus
            external resources on anxiety and other related mental health issues.
          </p>
          <p>
            A team project between three others and me. I was the project manager as well as personally responsible
            for the Mood Tracker tool and for catching odds and ends for the project. 
            This was also the final project and presentation for my development certificate program. 
          </p>
            <br />
          <p>
            Try It: <a href="https://zenden.herokuapp.com/dashboard" target="_blank" rel="noopener noreferrer">https://zenden.herokuapp.com/dashboard</a>
            <br />
            GitHub Repo: <a href="https://github.com/ulaura/Zen-Den" target="_blank" rel="noopener noreferrer">https://github.com/ulaura/Zen-Den</a>
          </p>
        </Col>    
      
        <Col lg={5} lgOffset={1} md={5} mdOffset={1}>
          <h4>Eat Da Burger</h4>
          <h5>October 2017. Updated December 2017</h5>
          <p>
            An app that allows users to input burger names and "devour" each burger by clicking a button. 
            Users are able to see newly created burgers appear in a list on one side of the page and devoured 
            burgers on the other side.
          </p>
            <br />
          <p>
            Try It: <a href="http://ulaura-eat-da-burger.herokuapp.com/" target="_blank" rel="noopener noreferrer">http://ulaura-eat-da-burger.herokuapp.com/</a>
            <br />
            GitHub Repo: <a href="https://github.com/ulaura/burger" target="_blank" rel="noopener noreferrer">https://github.com/ulaura/burger</a>
          </p>
        </Col>  
      </Row>

      <Row>
        <Col lg={5} md={5}>
          <h4>Feed-Yo-Face</h4>
          <h5>August - September 2017</h5>
          <p>
            An app that helps users discover recipes they can make with the ingredients in their pantry. 
            Users are able to make a profile, add ingredients to their pantry, search for recipes based on those ingredients, 
            and search for missing ingredients through Amazon or Walmart. A team project between three others and me. I was personally responsible for the Walmart API interaction.
          </p>
            <br />
          <p>
            Try It: <a href="https://feedyofacephp.herokuapp.com/app.html#!" target="_blank" rel="noopener noreferrer">https://feedyofacephp.herokuapp.com/app.html#!</a>
            <br />
            GitHub Repo: <a href="https://github.com/ulaura/Feed-Yo-Face-Final" target="_blank" rel="noopener noreferrer">https://github.com/ulaura/Feed-Yo-Face-Final</a>
          </p>
        </Col>
      
        <Col lg={5} lgOffset={1} md={5} mdOffset={1}>
          <h4>Light Bulb Psychic Game</h4>
          <h5>August 2017</h5>
          <p>
            A browser based JavaScript game which prompts users to guess the randomly generated letter. 
            Users have nine tries to guess correctly, and if they do, they are rewarded with a fun surprise.
          </p>
            <br />
          <p>
            Try It: <a href="https://ulaura.github.io/Psychic-Game/" target="_blank" rel="noopener noreferrer">https://ulaura.github.io/Psychic-Game/</a> 
            <br />
            (Note: Currently playable on desktop only)
            <br />
            GitHub Repo: <a href="https://github.com/ulaura/Psychic-Game" target="_blank" rel="noopener noreferrer">https://github.com/ulaura/Psychic-Game</a>
          </p>
        </Col>
      </Row>

      {/* Dummy link. It will eventually lead to a page with more projects. */}
      <Row>
        <Col lg={12}>
          <Link to="#">See More Projects &rarr;</Link>
        </Col>
      </Row>
    </div>
  );
}

export default Portfolio;