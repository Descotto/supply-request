import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';


function Results(props) {
    const [redirect, setRedirect] = useState(false);

    function handlePick(e) {
        e.preventDefault();

        let order = data[e.target.id]
        let order1 = {order}
        props.setOrder(order1);
        setRedirect(true);
    }
    if (redirect) return <Navigate to="/displayorder" />;


    let data = props.order.order;
   

    let arr = data.map((i, idx) => {
  
        return (
            <div key={idx}>
                    
                    <h4>
                    <button  id={idx}type="button" className="btn btn-success download-btn" onClick={handlePick} >Select</button>  <span />
                        {i.name}, <strong>Created:</strong>{i.date.slice(0, i.date.indexOf('T'))}
                    </h4>
                    
                

            </div>

        )

    })

    return (
        <div className='about-container'>
            <h1>Results for </h1>
            <h2>{data[0].name}</h2>
            <div className='resultsTable'>{arr}</div>


        </div>
    );
}

export default Results;