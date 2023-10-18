import React from 'react';
import Card from './Card';
import ListComponent from './cardList';

export default function CardList({ info }) {
  return (
    <ListComponent>
      {info.map((item) => {
        return <Card country={item} key={item.name} />;
      })}
    </ListComponent>
  );
}
