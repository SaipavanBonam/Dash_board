import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import '../index.css';

const columns1 = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'age', headerName: 'Age', type: 'number', width: 110 },
  { field: 'email', headerName: 'Email', width: 160 },
];

const rows1 = [
  { id: 1, name: 'John Doe', age: 35, email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', age: 28, email: 'jane@example.com' },
  { id: 3, name: 'Bob Johnson', age: 45, email: 'bob@example.com' },
  { id: 4, name: 'Alice Davis', age: 30, email: 'alice@example.com' },
  { id: 5, name: 'Steve Brown', age: 40, email: 'steve@example.com' },
];

const columns2 = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'studentName', headerName: 'Student Name', width: 150 },
  { field: 'age', headerName: 'Age', type: 'number', width: 110 },
  { field: 'coursesTook', headerName: 'Courses Took', width: 160 },
];

const rows2 = [
  { id: 1, studentName: 'John Doe', age: 21, coursesTook: 'Math, Physics' },
  { id: 2, studentName: 'Jane Smith', age: 23, coursesTook: 'Chemistry, Biology' },
  { id: 3, studentName: 'Bob Johnson', age: 22, coursesTook: 'History, English' },
  { id: 4, studentName: 'Alice Davis', age: 24, coursesTook: 'Math, Computer Science' },
  { id: 5, studentName: 'Steve Brown', age: 25, coursesTook: 'Physics, Chemistry' },
];

const columns3 = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'contactNumber', headerName: 'Contact Number', width: 160 },
  { field: 'gender', headerName: 'Gender', width: 110 },
];

const rows3 = [
  { id: 1, name: 'John Doe', contactNumber: '123-456-7890', gender: 'Male' },
  { id: 2, name: 'Jane Smith', contactNumber: '234-567-8901', gender: 'Female' },
  { id: 3, name: 'Bob Johnson', contactNumber: '345-678-9012', gender: 'Male' },
  { id: 4, name: 'Alice Davis', contactNumber: '456-789-0123', gender: 'Female' },
  { id: 5, name: 'Steve Brown', contactNumber: '567-890-1234', gender: 'Male' },
];

const TablePage = () => {
  return (
    <div className="table-page">
      <div className="table-container">
        <h2>Table 1</h2>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid rows={rows1} columns={columns1} pageSize={5} checkboxSelection />
        </div>
      </div>
      <div className="table-container">
        <h2>Table 2</h2>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid rows={rows2} columns={columns2} pageSize={5} checkboxSelection />
        </div>
      </div>
      <div className="table-container">
        <h2>Table 3</h2>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid rows={rows3} columns={columns3} pageSize={5} checkboxSelection />
        </div>
      </div>
    </div>
  );
};

export default TablePage;
