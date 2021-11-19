import React from 'react';
import { Bar } from 'react-chartjs-2';
const data = {
  labels: [
    '<2.0',
    '2.0',
    '2.1',
    '2,2',
    '2.3',
    '2.4',
    '2.5',
    '2.6',
    '2.7',
    '2.8',
    '2.9',
    '3.0',
    '3.1',
    '3.2',
    '3.3',
    '3.4',
    '3.5',
    '3.6',
    '3.7',
    '3.8',
    '3.9',
    '4.0',
  ],
  datasets: [
    {
      label: 'Số lượng điểm GPA',
      data: [
        10, 10, 15, 20, 23, 25, 30, 35, 40, 45, 50, 55, 60, 55, 50, 45, 30, 25,
        15, 10, 5, 5,
      ],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const BarChart = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>GPA</h1>
      <Bar data={data} height={50}  />
    </>
  );
};

export default BarChart;
