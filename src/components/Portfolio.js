import React from 'react';

const Portfolio = () => {
  return (
    <div>
      <div className="">
        <h3 className="">Portfolio</h3>
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
        
        <hr />

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
        
        <hr />

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

        <hr />

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
      </div>
    </div>
  );
}

export default Portfolio;