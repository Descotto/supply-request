import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

function ByName(props) {
  const [redirect, setRedirect] = useState(false);
  const [showResult, setShowResult] = useState('');

  function handleSubmitName(e) {
    e.preventDefault();
    let targetName = e.target.order.value.toUpperCase();

    axios.get(`${REACT_APP_SERVER_URL}byname/${targetName}`)
      .then((response) => {
        if (response.data.order.length > 0) {
          props.setOrder(response.data);
          setRedirect(true);
        }else {
          setShowResult('No Match Found');
        }
          

      }).catch((error) => {
        console.log("ERROR", error);
      });
  }
  if (redirect) return <Navigate to="/results" />;

  return (
    <div className="order-container">

      <form onSubmit={handleSubmitName}>
        <h4 className='order-search-title'>Search by Name</h4>
        <input autoComplete='off' name='order' type="text" placeholder="Enter Name" />
        <button type='button submit' className='btn btn-primary'>Search</button>
      </form>
      <br />
      <h5>{showResult}</h5>

    </div>
  );
}

export default ByName;