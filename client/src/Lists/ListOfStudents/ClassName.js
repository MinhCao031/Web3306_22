import React from 'react';
import './ListOfStudents.css';
const ClassName = ({ children }) => {
  return <h1 className="class-name">{children || 'Loading...'}</h1>;
};

export default ClassName;
