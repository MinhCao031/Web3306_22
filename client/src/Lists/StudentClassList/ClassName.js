import axios from 'axios';
import React, { useState, useEffect } from 'react';
const ClassName = ({ children }) => {
  return (
    <h1 className="class-name" style={{ marginBottom: '40px' }}>
      {children || 'Loading...'}
    </h1>
  );
};
export default ClassName;
