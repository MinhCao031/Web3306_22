import React from 'react';
import { CSVLink } from "react-csv";
import AsyncCSV from './AsyncCSV';

const headers = [
  { label: "First Name", key: "firstName" },
  { label: "Last Name", key: "lastName" },
  { label: "Email", key: "email" },
  { label: "Age", key: "age" }
];

const data = [
  { firstName: "Warren", lastName: "Morrow", email: "sokyt@mailinator.com", age: "36" },
  { firstName: "Gwendolyn", lastName: "Galloway", email: "weciz@mailinator.com", age: "76" },
  { firstName: "Astra", lastName: "Wyatt", email: "quvyn@mailinator.com", age: "57" },
  { firstName: "Jasmine", lastName: "Wong", email: "toxazoc@mailinator.com", age: "42" },
  { firstName: "Brooke", lastName: "Mcconnell", email: "vyry@mailinator.com", age: "56" },
  { firstName: "Christen", lastName: "Haney", email: "pagevolal@mailinator.com", age: "23" },
  { firstName: "Tate", lastName: "Vega", email: "dycubo@mailinator.com", age: "87" },
  { firstName: "Amber", lastName: "Brady", email: "vyconixy@mailinator.com", age: "78" },
  { firstName: "Philip", lastName: "Whitfield", email: "velyfi@mailinator.com", age: "22" },
  { firstName: "Kitra", lastName: "Hammond", email: "fiwiloqu@mailinator.com", age: "35" },
  { firstName: "Charity", lastName: "Mathews", email: "fubigonero@mailinator.com", age: "63" }
];

const csvReport = {
  data: data,
  headers: headers,
  filename: 'DSSV.csv'
};

function FileExport() {
  return (
    <div className="App">
      <CSVLink {...csvReport}>Export to CSV</CSVLink><br /><br />
      <AsyncCSV />
    </div>
  );
}

export default FileExport;
// import ToolkitProvider, { CSVExport } from 'react-bootstrap-table2-toolkit';

// const { ExportCSVButton } = CSVExport;

// <ToolkitProvider
//   keyField="id"
//   data={ products }
//   columns={ columns }
//   exportCSV
// >
//   {
//     props => (
//       <div>
//         <ExportCSVButton { ...props.csvProps }>Export CSV!!</ExportCSVButton>
//         <hr />
//         <BootstrapTable { ...props.baseProps } />
//       </div>
//     )
//   }
// </ToolkitProvider>
// // This is my custom csv export component
// const MyExportCSV = (props) => {
//   const handleClick = () => {
//     props.onExport();
//   };
//   return (
//     <div>
//       <button className="btn btn-success" onClick={ handleClick }>Click me to export CSV</button>
//     </div>
//   );
// };

// export const MyTable = () => (
//   <ToolkitProvider
//     keyField="id"
//     data={ products }
//     columns={ columns }
//     exportCSV
//   >
//     {
//       props => (
//         <div>
//           <BootstrapTable { ...props.baseProps } />
//           <hr />
//           <MyExportCSV { ...props.csvProps } />
//         </div>
//       )
//     }
//   </ToolkitProvider>
// );

// export default MyTable;