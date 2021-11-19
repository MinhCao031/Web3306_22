import React from 'react';
import { Pie } from 'react-chartjs-2';

const data = {
  labels: ['<50', '50-60', '60-70', '70-80', '80-90', '90-100'],
  datasets: [
    {
      label: 'Số lượng ĐRL',
      data: [12, 19, 3, 5, 2, 3],
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
const options = {
  maintainAspectRatio: false,
};
const PieChart = () => (
  <>
    <div style={{ position: 'relative', height: '50vh' }}>
      <h1 style={{ textAlign: 'center' }}>Điểm rèn luyện</h1>
      <Pie data={data} options={options} />
    </div>
  </>
);

export default PieChart;
