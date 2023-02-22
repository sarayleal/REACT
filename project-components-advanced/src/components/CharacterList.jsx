import React from 'react';
import ItemList from './ItemList.modules.css';

const CharacterList = ({ items }) => {
  return (
    <ul className={ItemList.list}>
      {items.map((item) => (
        <li key={item.id}>
          {item.name} ({item.gender})
        </li>
      ))}
    </ul>
  );
};

export default CharacterList;
