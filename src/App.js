import React, { useState } from 'react';
import { render } from 'react-dom';
import SearchParams from './SearchParams';
import { Link, Router } from '@reach/router';
import Details from './Details';
import ThemeContext from './ThemeContext';

const App = () => {
  /*
  return React.createElement(
    'div',
    {},
    // Childern inside the div
    [
      React.createElement('h1', {}, 'Adopt Me'),
      React.createElement(Pet, {
        name: 'Max',
        animal: 'Dog',
        breed: 'Shepard',
      }),
      React.createElement(Pet, {
        name: 'Iron',
        animal: 'bird',
        breed: 'Love',
      }),
      React.createElement(Pet, {
        name: 'Steel',
        animal: 'Sheep',
        breed: 'Shaun',
      }),
    ]
  );
  */

  const themeHook = useState('');

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/">Adopt Me! </Link>
          </header>

          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById('root'));
