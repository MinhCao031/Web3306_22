import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';

const PieChart = ({ selectedClassID }) => {
  const [drlList, setDrlList] = useState([]);
  useEffect(() => {
    if (selectedClassID !== undefined) {
      axios
        // .get('http://localhost:3001/drl')
        // .then((res) => {
        //   setDrlList(res.data);
        // })
        .get(`http://localhost:5000/api/classes/${selectedClassID}/grades`)
        .then((res) => {
          setDrlList(res.data.drl);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [selectedClassID]);
  const data = {
    labels: ['Kém', 'Yếu', 'Trung bình', 'Khá', 'Tốt', 'Xuất sắc'],
    datasets: [
      {
        label: 'Số lượng ĐRL',
        data: drlList,
        backgroundColor: [
          'rgba(255, 99, 132, 0.85)',
          'rgba(54, 162, 235, 0.85)',
          'rgba(255, 206, 86, 0.85)',
          'rgba(75, 192, 192, 0.85)',
          'rgba(153, 102, 255, 0.85)',
          'rgba(255, 159, 64, 0.85)',
        ],
        hoverBackgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
  };
  return (
    <>
      <div style={{ height: '50vh', marginBottom: '100px' }}>
        <h1 style={{ textAlign: 'center', fontSize: '50px' }}>
          Điểm rèn luyện
        </h1>
        <Pie data={data} options={options} />
      </div>
    </>
  );
};

export default PieChart;
