import React from 'react';

const MenuItem = ({ name }) => {
  return (
    <li className="menu-item">
      <a href={`#${name.toLowerCase().replace(/\s+/g, '-')}`}>{name}</a>
    </li>
  );
};

export default MenuItem;
