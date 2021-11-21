import React from 'react';
import { DropdownItems } from './DropdownItems';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import './DropdownAva.css';

function DropdownAva() {
    const history = useHistory();
    return (
        <div>
        <ul className="drop-menu">
            {DropdownItems.map((item, index) => {
            return (
                <li
                key={index}
                className={item.cname}
                onClick={() => {
                    if (item.title === 'Đăng xuất') {
                    sessionStorage.clear();
                    }
                    history.push(item.path);
                }}
                >
                <div>
                    {item.icon}
                    <span> {item.title} </span>
                </div>
                </li>
            );
            })}
        </ul>
        </div>
    );
}

export default DropdownAva;
