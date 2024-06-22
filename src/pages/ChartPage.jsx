import React, { useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar, PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';
import '../index.css'
const populationData = [
  { year: '1950', population: 359000000 },
  { year: '1960', population: 449000000 },
  { year: '1970', population: 553000000 },
  { year: '1980', population: 696000000 },
  { year: '1990', population: 873000000 },
  { year: '2000', population: 1053000000 },
  { year: '2010', population: 1231000000 },
  { year: '2020', population: 1380000000 },
];

const bmiData = [
  { name: 'John', bmi: 22 },
  { name: 'Mike', bmi: 27 },
  { name: 'Alex', bmi: 25 },
  { name: 'Tom', bmi: 24 },
  { name: 'Harry', bmi: 28 },
];

const socialMediaData = [
  { year: '2000', usage: 10 },
  { year: '2005', usage: 50 },
  { year: '2010', usage: 200 },
  { year: '2015', usage: 600 },
  { year: '2020', usage: 1200 },
];

const ChartPage = () => {
  const [populationChartType, setPopulationChartType] = useState('line');
  const [bmiChartType, setBmiChartType] = useState('line');
  const [socialMediaChartType, setSocialMediaChartType] = useState('line');

  const renderPopulationChart = () => {
    switch (populationChartType) {
      case 'bar':
        return (
          <BarChart data={populationData}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="year" />
            <YAxis width={100} />
            <Tooltip />
            <Legend />
            <Bar dataKey="population" fill="#8884d8" />
          </BarChart>
        );
      case 'pie':
        return (
          <PieChart>
            <Pie data={populationData} dataKey="population" nameKey="year" outerRadius={100} fill="#8884d8">
              {populationData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088FE", "#00C49F", "#FFBB28", "#FF8042"][index % 8]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        );
      default:
        return (
          <LineChart data={populationData}>
            <Line type="monotone" dataKey="population" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="year" />
            <YAxis width={100} />
            <Tooltip />
            <Legend />
          </LineChart>
        );
    }
  };

  const renderBmiChart = () => {
    switch (bmiChartType) {
      case 'bar':
        return (
          <BarChart data={bmiData}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis width={100} />
            <Tooltip />
            <Legend />
            <Bar dataKey="bmi" fill="#8884d8" />
          </BarChart>
        );
      case 'pie':
        return (
          <PieChart>
            <Pie data={bmiData} dataKey="bmi" nameKey="name" outerRadius={100} fill="#8884d8">
              {bmiData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088FE", "#00C49F", "#FFBB28", "#FF8042"][index % 8]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        );
      default:
        return (
          <LineChart data={bmiData}>
            <Line type="monotone" dataKey="bmi" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis width={100} />
            <Tooltip />
            <Legend />
          </LineChart>
        );
    }
  };

  const renderSocialMediaChart = () => {
    switch (socialMediaChartType) {
      case 'bar':
        return (
          <BarChart data={socialMediaData}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="year" />
            <YAxis width={100} />
            <Tooltip />
            <Legend />
            <Bar dataKey="usage" fill="#8884d8" />
          </BarChart>
        );
      case 'pie':
        return (
          <PieChart>
            <Pie data={socialMediaData} dataKey="usage" nameKey="year" outerRadius={100} fill="#8884d8">
              {socialMediaData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088FE", "#00C49F", "#FFBB28", "#FF8042"][index % 8]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        );
      default:
        return (
          <LineChart data={socialMediaData}>
            <Line type="monotone" dataKey="usage" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="year" />
            <YAxis width={100} />
            <Tooltip />
            <Legend />
          </LineChart>
        );
    }
  };

  return (
    <div className="chart-page">
      <h2>Population of India Over Time</h2>
      <div className="chart-buttons">
        <button onClick={() => setPopulationChartType('line')}>Line Chart</button>
        <button onClick={() => setPopulationChartType('bar')}>Bar Chart</button>
        <button onClick={() => setPopulationChartType('pie')}>Pie Chart</button>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        {renderPopulationChart()}
      </ResponsiveContainer>

      <h2>BMI of Some Random Boys</h2>
      <div className="chart-buttons">
        <button onClick={() => setBmiChartType('line')}>Line Chart</button>
        <button onClick={() => setBmiChartType('bar')}>Bar Chart</button>
        <button onClick={() => setBmiChartType('pie')}>Pie Chart</button>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        {renderBmiChart()}
      </ResponsiveContainer>

      <h2>Usage of Social Media Over Time</h2>
      <div className="chart-buttons">
        <button onClick={() => setSocialMediaChartType('line')}>Line Chart</button>
        <button onClick={() => setSocialMediaChartType('bar')}>Bar Chart</button>
        <button onClick={() => setSocialMediaChartType('pie')}>Pie Chart</button>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        {renderSocialMediaChart()}
      </ResponsiveContainer>
    </div>
  );
};

export default ChartPage;
