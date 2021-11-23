import React, { useState, useEffect } from 'react';
import axios from 'axios';
const ClassesDropDown = ({ setSelectedClassID }) => {
  const [classList, setClassList] = useState([]);
  const username = JSON.parse(sessionStorage.getItem('user'))
    ? JSON.parse(sessionStorage.getItem('user')).username
    : '';
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/classes/${username}`)
      .then((res) => {
        setClassList(
          res.data.map((item) => {
            return {
              classId: item.classId,
              className: item.className,
            };
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <select
        style={{
          marginLeft: '10px',
          padding: '5px 17px',
          backgroundColor: '#FF7A96',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
        }}
        onChange={(e) => {
          const classData = classList.filter((item) => {
            return item.className === e.target.value;
          });
          setSelectedClassID(classData[0].classId);
        }}
      >
        <option value="" selected disabled hidden>
          Chọn lớp
        </option>
        {classList.map((item) => {
          return (
            <option key={item.classId} value={item.className}>
              {item.className}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default ClassesDropDown;
