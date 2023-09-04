import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

function ByName(props) {
    const [redirect, setRedirect] = useState(false);


    function handleSubmitName(e) {
        e.preventDefault();
        let name = e.target.order.value.toUpperCase();
    
        axios.get(`${REACT_APP_SERVER_URL}byname/${name}`)
          .then((response) => {
            console.log('RESPONSE BY NAME =======>>>', response.data);
            props.setOrder(response.data);
            setRedirect(true);
          }).catch((error) => {
            console.log("ERROR", error);
          });
      }
      if (redirect) return <Navigate to="/results" />;

  return (
    <div className='about-container'>
      <h1>By Name</h1>

      <form onSubmit={handleSubmitName}>
        <h4>Search by Name</h4>
        <input autoComplete='off' name='order' type="text" placeholder="Enter Name" />
        <button type='button submit' className='btn btn-primary'>Search</button>
      </form>

    </div>
  );
}

export default ByName;