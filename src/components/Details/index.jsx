import React from 'react';
import { useParams } from 'react-router-dom';
import { DetailsComponent } from './details';

export default function Details() {
  const { id } = useParams();

  return (
    <DetailsComponent>
      <h1>País: {id}</h1>
    </DetailsComponent>
  );
}
