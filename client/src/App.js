import axios from 'axios';
import React, { useEffect, useState } from 'react';

import './App.css';
import Body from './Body';
import Search from './Search';

function App() {

  const [ searchInput, SetSearchInpt ] = useState('');

  useEffect(() => {
    axios.get('https://jobs.github.com/api')
      .then(data => console.log(data));
  }, []);

  return (
    <div className="App">
      <h2>Github Jobs</h2>
      <Search searchInput={searchInput} SetSearchInpt={SetSearchInpt} />
      <Body />
    </div>
  );
}

export default App;
