import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';




function Home() {


    return (
        <div className='home'>
            <h1>Supply Request</h1>

            <h4>News</h4>
            <div className='News'>
                <ul>
                    <li>All requests will now be stored for 2 weeks before deletion.</li> <br />
                    <li>You are now able to download an excel sheet with your selection upon making a request.</li><br />
                    <li>Added a Find option to look up past orders.</li><br />
                    <li>Updated list of items to relect the newest list.</li><br />
                    <li><strong className='new'>New:</strong>Added "Search by Name". This will display all requests made in the past 2 weeks.</li><br />
                    <li><strong className='new'>New:</strong>All categories are now collapsable for easier access.</li><br />
                    <li><strong>Notice:</strong> If there are any bugs, please reach out.</li><br />

                </ul>

            </div>



        </div>
    )
}



export default Home;