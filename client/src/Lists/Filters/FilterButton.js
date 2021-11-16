import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
const FilterButton = ({ type }) => {
  const [badFlip, setBadFlip] = useState(false);
  const [goodFlip, setGoodFlip] = useState(false);
  if (type === 'bad') {
    return (
      <Button
        className="ListButton filter"
        variant="outline-secondary"
        onMouseEnter={() => setBadFlip(true)}
        onMouseLeave={() => setBadFlip(false)}
      >
        {badFlip && <span>GPA dưới 2.0 || ĐRL dưới 60</span>}
        {!badFlip && <span>Lọc: Thuộc diện nhắc nhở</span>}
      </Button>
    );
  } else if (type === 'good') {
    return (
      <Button
        className="ListButton filter"
        variant="outline-secondary"
        onMouseEnter={() => setGoodFlip(true)}
        onMouseLeave={() => setGoodFlip(false)}
      >
        {goodFlip && <span>GPA trên 3.2 & ĐRL trên 80</span>}
        {!goodFlip && <span>Lọc: thuộc diện khen thưởng</span>}
      </Button>
    );
  }
};

export default FilterButton;
