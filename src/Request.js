import React, { useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import Accessories from './Accessories';
import Brentwood from './Brentwood';
import Copper from './Copper';
import Enterprise from './Enterprise';
import Essentials from './Essentials';
import Modems from './Modems';
import Secondary from './Secondary';
import Tools from './Tools';
import Zips from './Zips';


const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;


function Request(props) {
    const [order, setOrder] = useState([]);

    function handleChange(e) {
        console.log(order);
        let item = { itemCode: '', description: '', requested: 0 }
        item.itemCode = e.target.id;
        item.description = e.target.name;
        item.requested = e.target.value;
        props.setOrderTable([...props.orderTable, { itemCode: item.itemCode, description: item.description, requested: item.requested }])
        setOrder([...order, `\n${item.description}, count: ${item.requested}`]);
    }

    function handleClick(e) {

        if (props.orderTable.length > 0) {
            let container = document.createElement('div');
            let table = document.createElement('TABLE');
            let info = document.getElementById('info');
            let name = info.name.value.toUpperCase();
            let lead = info.lead.value.toUpperCase();
            let ot = props.orderTable;
            const order = { name: name, lead: lead, items: ot }

            //==AXIOS CALL===

            axios.post(`${REACT_APP_SERVER_URL}request`, order)
                .then(response => {

                    props.setDisplay(response.data.order);
                    let data = response.data.order;
                    navigator.clipboard.writeText(data);
                })
                .catch(err => {
                    console.log('error', err);
                });
            //===AXIOS CALL===


            generateTable(table, props.orderTable);
            generateTableHead(table, props.orderTable);

            container.appendChild(table);
            props.setDisplay(container);
        } else {
            alert('Please make your selection first');
        }
    }

    function generateTableHead(table) {
        let thead = table.createTHead();
        let row = thead.insertRow();
        let th = document.createElement("th");
        let th2 = document.createElement("th");
        let text = document.createTextNode("item");
        let text2 = document.createTextNode("count");
        th.appendChild(text);
        th2.appendChild(text2);
        row.appendChild(th);
        row.appendChild(th2);
    }

    function generateTable(table, data) {
        data.forEach(e => {
            let row = table.insertRow();

            let cell = row.insertCell();
            let cell2 = row.insertCell();
            let item = document.createTextNode(e.item);
            let count = document.createTextNode(e.count);
            cell.appendChild(item);
            cell2.appendChild(count)

        })
    }


    return (
        <div className="App">
            <h1>Supply Request</h1>
            <div>
                <form id='info'>
                    <div>
                        <label>Name</label>
                        <br/>
                        <input type='text' name='name' />
                    </div>
                    <div>
                        <label>Lead</label>
                        <br/>
                        <input type='text' name='lead' />
                    </div>
                </form>
            </div><br />
            <Essentials handleChange={handleChange} /><br />
            <Secondary handleChange={handleChange} /><br />
            <Brentwood handleChange={handleChange} /><br />
            <Modems handleChange={handleChange} /><br />
            <Zips handleChange={handleChange} /><br />
            <Accessories handleChange={handleChange} /><br />
            <Copper handleChange={handleChange} /><br />
            <Enterprise handleChange={handleChange} /><br />
            <Tools handleChange={handleChange} /><br />


            <props.Link to="/display"><button type='submit' className='btn btn-primary complete-order' onClick={handleClick}>Complete Order</button></props.Link>


        </div>
    );
}

export default Request;