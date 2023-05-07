import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Request from './Request';
import About from './About';
import Display from './Display';

function App() {
  const [display, setDisplay] = useState();
  const [orderTable, setOrderTable] = useState([]);


  return (
    <div>
      <Router>
        <nav id="navbar" className="navbar">
          <ul>
            <li><Link className="nav-link active" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/about">About</Link></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>

        <Routes >
          <Route path='/' element={<Request setDisplay={setDisplay} Link={Link} orderTable={orderTable} setOrderTable={setOrderTable} />} />
          <Route path='/about' element={<About />} />
          <Route path='/display' element={<Display data={display} setDisplay={setDisplay} />} />


        </Routes>
      </Router>
    </div>
  )
}

export default App;
