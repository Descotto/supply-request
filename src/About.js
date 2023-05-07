import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';




function About() {


    return (
        <div className='App'>
            <h1>About</h1>

            <h3>How to use</h3>
            <p>Select the ammount you want of eavh item, scroll down and press the "copy to clipboard" button. <br /> Now you can paste it anywhere.</p>

            <h4>Contact</h4>
            <div className="social-links">
                <a href="https://github.com/Descotto" className="instagram"><i className="bi bi-github">Github</i></a> <br />
                <a href="https://www.linkedin.com/in/david-escotto/" className="linkedin"><i className="bi bi-linkedin">linkedin</i></a>
            </div>

            <footer>
                <small>Created by David Escotto</small>
            </footer>
        </div>
    )
}



export default About;