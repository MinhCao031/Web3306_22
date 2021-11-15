import React from 'react';
import './ListOfStudents.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
const ClassName = () => {
  const [className, setClassName] = useState('');
  useEffect(() => {
    axios
      .get('http://localhost:3001/className')
      .then((res) => {
        setClassName(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <h1 className="class-name">{className || 'Loading...'}</h1>;
};

export default ClassName;
