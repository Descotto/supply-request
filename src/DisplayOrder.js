import React from 'react';
import './App.css'
import { useState } from 'react';
import * as XLSX from 'xlsx';





function DisplayOrder(props) {

    const [exporting, setExporting] = useState(false);


    let name = props.order.order.name;
    let lead = props.order.order.lead;
    let date = props.order.order.date;
    let items = props.order.order.items;
    let orderId = props.order.order._id;

    function changeColor(e) {
        e.preventDefault();
        console.log('ITEMS ===>', items);
        e.target.className = 'btn btn-success'
        e.target.innerText = 'Filled';
        console.log(e.target.innerText);
    }

    //================================================================
    function handleDownload() {
        if (exporting) return;
    
        setExporting(true);
    
        const wb = XLSX.utils.book_new();
    
        const supplyRequestData = [
            ["Sonic Telecom, LLC"],
            ["Supply Request Sheet - Field Installation Warehouse"],
            ["Mark with an 'X' if you want the order shipped"],
            [],
            ["Lead's Name:", "", "Tech's Name/Ship-To:", "", "Today's Date:", "Box Count", "Ship Cost"],
            ['"Shipping\nRequest"', "", "For shipping to complete"],
            [],
            ["FIBER"],
            ["Item Code", "Description", "Requested", "Pulled"],
            ["1287787F1", "1g ONT 20/case"],
            ["1287843F1N", "10g ONT 10/case"],
            // ... Populate with Fiber data ...
            [],
            ["Brentwood"],
            ["Item Code", "Description", "Requested", "Pulled"],
            // ... Populate with Brentwood data ...
            [],
            ["Modems"],
            ["Item Code", "Description", "Requested", "Pulled"],
            // ... Populate with Modems data ...
            [],
            // ... Populate other sections ...
    
            // Picked up By and other sections
    
        ];
    
        const supplyRequestWS = XLSX.utils.aoa_to_sheet(supplyRequestData);
    
        // Merge cells
        supplyRequestWS['!merges'] = [
            { s: { r: 5, c: 0 }, e: { r: 6, c: 1 } }, // Merge Lead's Name
            { s: { r: 5, c: 2 }, e: { r: 5, c: 3 } }, // Merge Tech's Name
            // ... Add more merge cells as needed ...
        ];
    
        // Apply font size to specific cells
        supplyRequestWS["A1"].s = { fontSize: 12, bold: true }; // Sonic Telecom, LLC
        supplyRequestWS["A2"].s = { fontSize: 16, bold: true }; // Supply Request Sheet
        supplyRequestWS["A3"].s = { fontSize: 12, italic: true }; // Mark with an 'X'
        supplyRequestWS["A6"].s = { fontSize: 14, bold: true }; // Lead's Name
        supplyRequestWS["C6"].s = { fontSize: 14, bold: true }; // Tech's Name
        // ... Add more font styles ...
    
        XLSX.utils.book_append_sheet(wb, supplyRequestWS, 'Supply Request');
    
        XLSX.writeFile(wb, 'exported-order.xlsx', {
            type: 'blob',
            mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        });
    
        setExporting(false);
    }
//================================================================  =====================================
let orderBoard = items.map((i, idx) => {
    return (
        <tr key={idx} className='list'>
            <td>
                {i.itemCode}
            </td>
            <td>
                {i.description}
            </td>
            <td className='th'>
                {i.requested}
            </td>
            <td>
                <button onClick={changeColor} type="button" className="btn btn-warning">Pending</button>
            </td>

        </tr>
    )
})




return (
    <div className='App'>
        <h2>Order number : <small className='ornum'>{orderId}</small></h2>
        <p>Name: <strong>{name}</strong></p>
        <p>Lead: <strong>{lead}</strong></p>
        <p>Date: <strong>{date}</strong></p>
        <table>
            <thead>
                <tr>
                    <th width='30%'>Item Code</th>
                    <th width='30%'>Description</th>
                    <th className='th' width='30%'>Requested</th>
                    <th width='30%'>Pulled</th>
                </tr>
            </thead>
            <tbody>
                {orderBoard}
            </tbody>
        </table>
        <span></span>

        <button type='button' onClick={handleDownload} className="btn btn-primary">Export to Excel</button>
    </div>
)
}



export default DisplayOrder;