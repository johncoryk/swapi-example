import React, { useState, useEffect } from 'react';

import CharacterContainer from './components/CharacterContainer';
import './styles/style.css';

function App() {
  const [character, setCharacter] = useState({});
  const [count, setCount] = useState(1);

  const getCharacterData = () => {
    fetch(`https://swapi.dev/api/people/${count}/`)
      .then(res => res.json())
      .then(data => setCharacter(data));
  };

  useEffect(() => {
    getCharacterData();
    // eslint-disable-next-line
  }, [character]);

  return (
    <div>
      <div className='main-contain'>
        <CharacterContainer characterInfo={character} />
        <div className='buttons'>
          <button
            className='btn'
            onClick={() => setCount(count > 1 ? count - 1 : count)}
          >
            Decrement
          </button>
          <button className='btn' onClick={() => setCount(count + 1)}>
            Increment
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
