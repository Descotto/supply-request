import React from 'react';
import './App.css'
import * as XLSX from 'xlsx';
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';





function DisplayOrder(props) {



    let name = props.order.order.name;
    let lead = props.order.order.lead;
    let date = props.order.order.date;
    let items = props.order.order.items;
    let orderId = props.order.order._id;

    function changeColor(e) {
        e.preventDefault();
        e.target.className = 'btn btn-success'
        e.target.innerText = 'Filled';

    }
    //============================FULL





    const handleExport = () => {

        const workbook = new ExcelJS.Workbook();
        const worksheet =  workbook.addWorksheet('New Sheet', {
            pageSetup:{paperSize: 9, orientation:'landscape'}
          });


        const preset = [
            ["", "Supply Request Sheet - Field Installation Warehouse", "", ""],
            ["Lead's Name:", lead, "Shipping", ""],
            ["", "", "Request", ""],
            ["Tech's Name/Ship-To:", name, "", ""],
            ["Today's Date:", date, "Box Count", "Ship Cost"],
            ["", "", "", ""],
            ["Item Code:", "Description:", "Requested:", "Pulled:"],
            ["", "", "", ""]


        ];

        let pull = items.map((i, idx) => {
            return (
                [i.itemCode, i.description, i.requested, ""]
            )
        })

        let data = preset.concat(pull)



        data.forEach((row) => {
            worksheet.addRow(row);
        });

//========== STYLES ========
        worksheet.getColumn('B').font = {
            name: 'Calibri (Body)',
            color: { argb: '00000000' },
            family: 2,
            size: 11,
            bold: true
           };

           worksheet.getColumn('A').width = 23;
           worksheet.getColumn('B').width = 57;
           worksheet.getColumn('C').width = 15;
           worksheet.getColumn('D').width = 15;
           worksheet.getRow('1').height = 35;
           
//========== STYLES ========

        workbook.xlsx.writeBuffer().then((buffer) => {
            const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            saveAs(blob, 'supply_request_sheet.xlsx');
        });
    };





    //======================
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
            <button onClick={handleExport}>check</button>
            {/* <button type='button' onClick={handleDownload} className="btn btn-primary">Export to Excel</button> */}
        </div>
    )
}



export default DisplayOrder;