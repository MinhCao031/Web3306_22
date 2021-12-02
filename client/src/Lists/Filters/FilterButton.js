import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import axios from 'axios';
import './Filter.css';
import PopOverHover from './PopOverHover';

const FilterButton = ({ setData }) => {
    const [filterType, setFilterType] = useState('');

    const classId = JSON.parse(sessionStorage.getItem('TableInfo'))
        ? JSON.parse(sessionStorage.getItem('TableInfo')).classId
        : '';
    const username = JSON.parse(sessionStorage.getItem('user'))
        ? JSON.parse(sessionStorage.getItem('user')).username
        : '';

    const handleFilterType = (e) => {
        setFilterType(e.target.value);
    }

    function isBad(rec) {
        if (rec.gpa < 2.0 || rec.drl < 60) {
            return true;
        }
        return false;
    }

    const handleBadClick = (e) => {
        axios
        .post(`http://localhost:5000/api/classes/students`, null, {
            params: {
            class_id: classId,
            role: 'Teacher',
            user_id: username,
            },
        })
        .then((res) => {
            setData(res.data.filter(isBad));
        })
        .catch((err) => {
            console.log(err);
        });
        e.preventDefault();
    };

    function isGood(rec) {
        if (rec.gpa >= 3.2 && rec.drl >= 80) {
            return true;
        }
        return false;
    }

    const handleGoodClick = (e) => {
        axios
        .post(`http://localhost:5000/api/classes/students`, null, {
            params: {
            class_id: classId,
            role: 'Teacher',
            user_id: username,
            },
        })
        .then((res) => {
            setData(res.data.filter(isGood));
        })
        .catch((err) => {
            console.log(err);
        });
        e.preventDefault();
    };

    const handleFeeClick = (e) => {
        console.log('Thiếu học phí');
    };

    const handleCreditsClick = (e) => {
        console.log('Thiếu tín chỉ');
    };

    const handleExpelledClick = (e) => {
        console.log('Nguy cơ nghỉ học');
    }

    return (
        <>
            <InputLabel id="select-filter-label" sx={{marginLeft: 1.9}}> Tiêu chí lọc </InputLabel>
            <Select
                labelId="select-filter-label"
                id="select-filter"
                value={filterType}
                label='Tiêu chí lọc'
                onChange={handleFilterType}
            >
                <MenuItem 
                    value={'good'}
                    onClick={handleGoodClick}
                >
                    <PopOverHover tag={'good'} />
                </MenuItem>

                <MenuItem 
                    value={'bad'}
                    onClick={handleBadClick}
                >
                    <PopOverHover tag={'bad'} />
                </MenuItem>
                
                <MenuItem
                    value={'fee'}
                    onClick={handleFeeClick}
                >
                    {'Thiếu học phí'}
                </MenuItem>

                <MenuItem
                    value={'credits'}
                    onClick={handleCreditsClick}
                >
                    {'Thiếu tín chỉ'}
                </MenuItem>

                <MenuItem
                    value={'expelled'}
                    onClick={handleExpelledClick}
                >
                    <PopOverHover tag={'expelled'} />
                </MenuItem>
            </Select>
        </>
    )
};

export default FilterButton;
