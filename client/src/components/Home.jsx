import React from 'react';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Welcome to the Star Wars App</h1>
        <p>In the boundless universe, Star Wars crafts an epic saga of hope against despair, courage, and destiny, igniting the imaginations of countless fans to explore the infinite.</p>
        <NavLink to="/films" className="explore-button">
          Explore
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
