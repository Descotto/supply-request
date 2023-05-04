import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Field Technician</h1>
        <h2>Secondary</h2>
        <p id="black"><select>
          <option value="3">0</option>
          <option value="10">1</option>
          <option value="20">2</option>
          <option value="35">3</option>
          <option value="50">4</option>
          <option value="75">5</option>
          <option value="100">6</option>
        </select> Meters (black) <select>
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
        <p id="white"><select>
          <option value="3">0</option>
          <option value="10">1</option>
          <option value="20">2</option>
          <option value="35">3</option>
        </select> Meters (White) <select>
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
