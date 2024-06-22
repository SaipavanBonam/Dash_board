
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import TablePage from './pages/TablePage';
import ChartPage from './pages/ChartPage';
import CalendarPage from './pages/CalendarPage';
import KanbanPage from './pages/KanbanPage';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/table" element={<TablePage />} />
            <Route path="/charts" element={<ChartPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/kanban" element={<KanbanPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
