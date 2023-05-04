import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Field Technician</h1>
        <h2>Secondary</h2>
        <p id="black">Black Secondary - <select>
          <option value="3">3</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="35">35</option>
          <option value="50">50</option>
          <option value="75">75</option>
          <option value="100">100</option>
        </select> Meters,    Count: <select>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select></p>
        <br></br>
        <p id="white">White Secondary - <select>
          <option value="3">3</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="35">35</option>
        </select> Meters,  Count: <select>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select></p>
      </div>
    </div>
  );
}

export default App;
