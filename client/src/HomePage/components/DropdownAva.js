import React, { useState } from 'react';
import { DropdownItems } from './DropdownItems';
import { Link } from 'react-router-dom';
import './DropdownAva.css';

function DropdownAva() {
  return (
    <div>
      <ul className="drop-menu">
        {DropdownItems.map((item, index) => {
          return (
            <li key={index} className={item.cname}>
              <Link to={item.path}>
                {item.icon}
                <span> {item.title} </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DropdownAva;
