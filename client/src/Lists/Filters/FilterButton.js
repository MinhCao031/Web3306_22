import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const FilterButton = ({ type, data, setData }) => {
    const [badFlip, setBadFlip] = useState(false);
    const [goodFlip, setGoodFlip] = useState(false);

    function isBad(rec) {
        if (rec.gpa < 2.0 || rec.drl < 60) {
            return true;
        }
        return false;
    }
    const handleBadClick = (e) => {
        setData(
            data.filter(isBad)
        )
        e.preventDefault();
    }

    function isGood(rec) {
        if (rec.gpa >= 3.2 && rec.drl >= 80) {
            return true;
        }
        return false;
    }
    const handleGoodClick = (e) => {
        setData(
            data.filter(isGood)
        )
        e.preventDefault();
    }

    if (type === 'bad') {
        return (
            <Button
            className="ListButton filter"
            variant="outline-secondary"
            onClick={handleBadClick}
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
                onClick={handleGoodClick}
                onMouseEnter={() => setGoodFlip(true)}
                onMouseLeave={() => setGoodFlip(false)}
            >
                {goodFlip && <span>GPA trên 3.2 & ĐRL trên 80</span>}
                {!goodFlip && <span>Lọc: Thuộc diện khen thưởng</span>}
            </Button>
        );
    }
};

export default FilterButton;
