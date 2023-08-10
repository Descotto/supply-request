import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';




function Display(props) {

    let tab = props.data;

    function showTable() {
        console.log(props);
        let div = document.getElementById('show');
        if (tab) {
            let text = document.createElement('p');
            text.textContent = tab
            div.appendChild(text);
            props.setDisplay('');
        } else {
            let text = document.createElement('p');
            text.textContent = 'Nothing selected';
            div.appendChild(text);
        }

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