import React from 'react';
import './ListOfStudents.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
const ClassName = ({ children }) => {
  return <h1 className="class-name">{children || 'Loading...'}</h1>;
};

export default ClassName;
