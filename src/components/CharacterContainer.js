import React from 'react';

const CharacterContainer = ({ characterInfo }) => {
  const addKg = weight => {
    return weight + 'kg';
  };

  return (
    <section>
      {characterInfo && (
        <>
          <h1>Name: {characterInfo.name}</h1>
          <h3>Weight: {addKg(characterInfo.mass)}</h3>
          <h3>Birth Year: {characterInfo.birth_year}</h3>
        </>
      )}
    </section>
  );
};

export default CharacterContainer;
