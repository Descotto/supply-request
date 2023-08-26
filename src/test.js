
import React from 'react';
import XLSX from 'xlsx';
import jsonData from './sheet.json';



const handleDownload = () => {
  const workbook = XLSX.utils.book_new();
  const worksheetData = XLSX.utils.json_to_sheet(jsonData);

  XLSX.utils.book_append_sheet(workbook, worksheetData, 'Sheet1');

  const blob = new Blob([XLSX.write(workbook, { bookType: 'xlsx', type: 'blob' })], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  });

  const downloadUrl = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = downloadUrl;
  a.download = 'output.xlsx';
  a.click();
  URL.revokeObjectURL(downloadUrl);
};

const App = () => {
  return (
    <div>
      <button onClick={handleDownload}>Download Excel</button>
    </div>
  );
};

export default App;
