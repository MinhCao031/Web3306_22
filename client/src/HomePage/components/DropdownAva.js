import React, { useState } from 'react';
import { DropdownItems } from './DropdownItems';
import { Link } from 'react-router-dom';
import './DropdownAva.css';
// import './test.css';

function DropdownAva() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <div>
            <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {DropdownItems.map((item, index) => {
                    return (
                        <li key={index} className={item.cname} >
                            <Link to={item.path} onClick={() => setClick(false)}>
                                {item.icon}
                                <span> {item.title} </span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default DropdownAva