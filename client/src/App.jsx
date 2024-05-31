import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import logo from './assets/star_wars_logo.png';
import SearchResults from './components/SearchResults';
import DataList from './components/DataList';

const loadFont = () => {
  const link = document.createElement('link');
  link.href = 'https://fonts.cdnfonts.com/css/star-jedi';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
};

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  const handleSearch = () => {
    axios.get(`${API_BASE_URL}/people?search=${query}`)
      .then(response => {
        setResults(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the search results!", error);
      });
  };

  useEffect(() => {
    loadFont();
  }, []);

  const handleReset = () => {
    setResults([]);
    setQuery('');
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="logo-container">
            <img src={logo} alt="Star Wars Logo" className="logo" />
            <div className="search search-container">
              <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => setIsInputFocused(false)}
                placeholder="character's name..."
              />
              <NavLink to="/search">
                <button onClick={handleSearch}>Find</button>
              </NavLink>
            </div>
          </div>
          <nav className="main-nav">
            <ul>
              <li>
                <NavLink exact to="/" onClick={handleReset} activeClassName="active">
                  Films
                </NavLink>
              </li>
              <li>
                <NavLink to="/planets" onClick={handleReset} activeClassName="active">
                  Planets
                </NavLink>
              </li>
              <li>
                <NavLink to="/people" onClick={handleReset} activeClassName="active">
                  People
                </NavLink>
              </li>
              <li>
                <NavLink to="/starships" onClick={handleReset} activeClassName="active">
                  Starships
                </NavLink>
              </li>
              <li>
                <NavLink to="/vehicles" onClick={handleReset} activeClassName="active">
                  Vehicles
                </NavLink>
              </li>
            </ul>
          </nav>
          <p className="slogan">
            May the Force be with you.
          </p>
        </header>

        <main className="main">
          <Routes>
            <Route
              path="/planets"
              element={<DataList apiEndpoint={`${API_BASE_URL}/planets`} dataKeys={['climate', 'gravity', 'terrain', 'population', 'diameter', 'orbital_period', 'rotation_period']} />}
            />
            <Route
              path="/people"
              element={<DataList apiEndpoint={`${API_BASE_URL}/people`} dataKeys={['height', 'mass', 'gender', 'hair_color', 'skin_color', 'eye_color']} />}
            />
            <Route
              path="/"
              element={<DataList apiEndpoint={`${API_BASE_URL}/films`} dataKeys={['episode_id', 'director', 'producer', 'release_date']} />}
            />
            <Route
              path="/starships"
              element={<DataList apiEndpoint={`${API_BASE_URL}/starships`} dataKeys={['model', 'MGLT', 'consumables', 'length', 'passengers', 'hyperdrive_rating']} />}
            />
            <Route
              path="/vehicles"
              element={<DataList apiEndpoint={`${API_BASE_URL}/vehicles`} dataKeys={['model', 'vehicle_class', 'manufacturer', 'length', 'cost_in_credits', 'crew']} />}
            />
            <Route path="/search" element={<SearchResults results={results} />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="footer__me">
            Project by <span className='special'>Vladislav</span>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
