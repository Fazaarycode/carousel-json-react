import React from 'react';
import FetchData from './FetchData'
import Navbar from './Navbar' 

import './App.css';
// https://jsonplaceholder.typicode.com/albums
// https://jsonplaceholder.typicode.com/photos?albumId=1
function App() {
  
  return (
    <div className="App">
      <Navbar />
      <FetchData />
    </div>
  );
}

export default App;
