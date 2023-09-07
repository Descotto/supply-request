import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

function Order(props) {
  const [redirect, setRedirect] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    let id = e.target.order.value;

    axios.get(`${REACT_APP_SERVER_URL}order/${id}`)
      .then((response) => {

        props.setOrder(response.data);
        setRedirect(true);
      }).catch((error) => {
        console.log("ERROR", error);
      });
  }



  if (redirect) return <Navigate to="/displayorder" />;

  return (
    <div className="order-container">
      <form onSubmit={handleSubmit}>
        <h4>Search by Order Number</h4>
        <input autoComplete='off' name='order' type="text" placeholder="Order Number" />
        <button type='button submit' className='btn btn-primary'>Search</button>
      </form>
      
    </div>
  );
}

export default Order;
