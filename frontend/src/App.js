import React, { useState } from 'react';
import Search from './Search';
import Results from './Results';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

function App() {
  const [searchResults, setSearchResults] = useState();

  return (
    <div>
      <Search onResults={setSearchResults} />
      <Results buses={searchResults} />
    </div>
  );
}

export default App;
