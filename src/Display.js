import React, { useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';




function Display(props) {



    function showTable() {
        let div = document.getElementById('show');
        let tab = props.data;
        div.appendChild(tab);

    }

    return (
        <div className='App'>
            <h1>Display</h1>

            <div id="show"></div>
            <button onClick={showTable}>Show</button>
        </div>
    )
}



export default Display;