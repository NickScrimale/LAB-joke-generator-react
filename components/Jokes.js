/* eslint-disable react/button-has-type */
// import { Button } from 'bootstrap';
import React, { useState } from 'react';
import getJoke from '../api/jokeData';

function Jokes() {
  const [joke, setJoke] = useState({});
  const [btnText, setBtnText] = useState('Get a Joke');

  const handleClick = () => {
    if (btnText === 'Get a Joke' || btnText === 'Get Another Joke') {
      getJoke().then(setJoke).then(() => {
        setBtnText('Get Punchline');
      });
    } else if (btnText === 'Get Punchline') {
      setBtnText('Get Another Joke');
    }
  };

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '600px',
        margin: '0 auto',
      }}
    >
      <h2>{ btnText === 'Get a Joke' ? '' : joke.setup }</h2>
      <h4>{btnText === 'Get Another Joke' ? joke.delivery : ''}</h4>
      <button variant="light" size="lg" onClick={handleClick}>{btnText}</button>{' '}
    </div>
  );
}
export default Jokes;
