import React from 'react';


function Results(props) {



    let data = props.order.order;
    console.log(data)

    let arr = data.map((i, idx) => {
        console.log(i);
        return (
            <li id={i._id}>
                {i.name}, {i._id}. <strong>Created:</strong>{i.date.slice(0, i.date.indexOf('T'))}
            </li>
        )

    })

    return (
        <div className='about-container'>
            <h1>Results</h1>
            <ul>{arr}</ul>


        </div>
    );
}

export default Results;