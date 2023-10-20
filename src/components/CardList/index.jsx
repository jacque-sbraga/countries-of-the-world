import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import ListComponent from './cardList';

export default function CardList() {
  const data = useSelector((state) => state.reducer.data);
  const filteredList = useSelector((state) => state.reducer.filteredList);

  const countryList = filteredList.length === 0 ? data : filteredList;
  return (
    <ListComponent>
      {countryList.map((item) => {
        return <Card country={item} key={item.name} />;
      })}
    </ListComponent>
  );
}
