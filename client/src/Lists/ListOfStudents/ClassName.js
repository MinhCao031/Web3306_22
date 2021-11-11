import React from 'react';
import './ListOfStudents.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
const ClassName = () => {
  const [className, setClassName] = useState('');
  useEffect(() => {
    axios
      .get('http://localhost:3000/className')
      .then((res) => {
        setClassName(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <h1>{className}</h1>;
};

export default ClassName;
