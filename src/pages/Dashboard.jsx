import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  
  const tableData = [
    { id: 1, name: 'John Doe', age: 35, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 28, email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', age: 45, email: 'bob@example.com' },
    { id: 4, name: 'Alice Davis', age: 30, email: 'alice@example.com' },
    { id: 5, name: 'Steve Brown', age: 40, email: 'steve@example.com' },
  ];

  
  const chartData = [
    { name: 'Jan', uv: 4000 },
    { name: 'Feb', uv: 3000 },
    { name: 'Mar', uv: 2000 },
    { name: 'Apr', uv: 2780 },
    { name: 'May', uv: 1890 },
    { name: 'Jun', uv: 2390 },
    { name: 'Jul', uv: 3490 },
  ];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
       
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '1rem' }}>
            <Typography variant="h6" gutterBottom>
              Sample Table
            </Typography>
            <div style={{ height: 400, width: '100%' }} className="table-container">
              <DataGrid rows={tableData} columns={Object.keys(tableData[0]).map((key) => ({ field: key, headerName: key.toUpperCase(), width: 150 }))} pageSize={5} />
            </div>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '1rem' }}>
            <Typography variant="h6" gutterBottom>
              Sample Chart
            </Typography>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={chartData} className="table-container">
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
       
        <Grid item xs={12} className="table-container">
          <Paper elevation={3} style={{ padding: '1rem' }}>
            <Typography variant="h6" gutterBottom>
              Kanban Board
            </Typography>
            <Grid container spacing={3} >
              <Grid item xs={4}>
                <Paper elevation={3} style={{ padding: '1rem' }}>
                  <Typography variant="h6" gutterBottom>
                    To Do
                  </Typography>
                  
                  <ul>
                    <li>Task 1</li>
                    <li>Task 2</li>
                    <li>Task 3</li>
                  </ul>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper elevation={3} style={{ padding: '1rem' }}>
                  <Typography variant="h6" gutterBottom>
                    In Progress
                  </Typography>
                  
                  <ul>
                    <li>Task 4</li>
                    <li>Task 5</li>
                  </ul>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper elevation={3} style={{ padding: '1rem' }}>
                  <Typography variant="h6" gutterBottom>
                    Done
                  </Typography>
                
                  <ul>
                    <li>Task 6</li>
                    <li>Task 7</li>
                    <li>Task 8</li>
                  </ul>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
