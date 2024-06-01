import React from 'react';

function SearchResults({ results }) {
  return (
    <div>
        <h2 className="special">Search Results:</h2>
        <div className="card-container">
            {results.map((result, index) => (
                <div key={index} className="card">
                    <h3 className="card__title special">{result.name}</h3>
                    <p className="card__info">Height: <span className="special">{result.height}</span></p>
                    <p className="card__info">Mass: <span className="special">{result.mass}</span></p>
                    <p className="card__info">Gender: <span className="special">{result.gender}</span></p>
                    <p className="card__info">Hair Color: <span className="special">{result.hair_color}</span></p>
                    <p className="card__info">Eye Color: <span className="special">{result.eye_color}</span></p>
                </div>
            ))}
        </div>
    </div>
  );
}

export default SearchResults;
