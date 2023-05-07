import React, { useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';




function Display(props) {

    let tab = props.data;

    function showTable() {
        let div = document.getElementById('show');
        div.appendChild(tab);

    }

    return (
        <div className='App'>
            <p>copied to clipboard</p>

            <div id="show"></div>
            <button onClick={showTable}>Show</button>
        </div>
    )
}



export default Display;