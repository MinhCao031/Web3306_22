import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';

const PieChart = ({ selectedClassID }) => {
  const [drlList, setDrlList] = useState([]);
  useEffect(() => {
    if (selectedClassID !== undefined) {
      axios
        .get(`http://localhost:5000/api/classes/${selectedClassID}/grades`)
        .then((res) => {
          setDrlList(res.data.drl);
          //console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [selectedClassID]);
  const data = {
    labels: ['<35', '35-49', '50-64', '65-79', '80-89', '90-100'],
    datasets: [
      {
        label: 'Số lượng ĐRL',
        data: drlList,
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
  return (
    <>
      <div style={{ position: 'relative', height: '50vh' }}>
        <h1 style={{ textAlign: 'center' }}>Điểm rèn luyện</h1>
        <Pie data={data} options={options} />
      </div>
    </>
  );
};

export default PieChart;
