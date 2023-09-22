import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import axios from 'axios';
import Request from './Request';
import About from './About';
import Display from './Display';
import DisplayOrder from './DisplayOrder';
import Home from './Home';
import Order from './Order';
import LeftSidebarNavbar from './Sidebar';
import NotFound from './NotFound';
import Results from './Results';
import ByName from './ByName';




const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;


function App() {
  const [display, setDisplay] = useState();
  const [orderTable, setOrderTable] = useState([]);
  const [order, setOrder] = useState([]);
  const [siteData, setSiteData] = useState()

  
  //====siteData
  useEffect(() => {
    axios.get(`${REACT_APP_SERVER_URL}data`)
      .then((response) => {
        setSiteData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


  return (
    <div className='App app-container'>




      <Router >
        <header className="nav-container">
          <div className='navbar'>
            <LeftSidebarNavbar Link={Link} />
          </div>
        </header>

        <Routes className="right-components">
          <Route path='/' element={<Home />} />
          <Route path='/request' element={<Request setDisplay={setDisplay} Link={Link} orderTable={orderTable} setOrderTable={setOrderTable} siteData={siteData} />} />
          <Route path='/about' element={<About />} />
          <Route path='/lookup' element={<Order setOrder={setOrder} />} />
          <Route path='/byname' element={<ByName setOrder={setOrder} />} />
          <Route path='/display' element={<Display data={display} setOrder={setOrder} setDisplay={setDisplay} />} />
          <Route path='/displayorder' element={<DisplayOrder order={order} />} />
          <Route path='/results' element={<Results order={order} setOrder={setOrder} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
