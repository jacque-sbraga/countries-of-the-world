import React from 'react';
import { Link } from 'react-router-dom';
import { CardItem, Info } from './card';
import { formatNumber } from '../../../utils/utils';

export default function Card({ country }) {
  const population = formatNumber(country.population);
  return (
    <CardItem>
      <Link to={`country/${country.id}`}>
        <div>
          <img src={country.flag} alt='' />
        </div>
        <Info>
          <h3>{country.name}</h3>
          <p>
            <span>Population: </span>
            {population}
          </p>
          <p>
            <span>Region: </span>
            {country.region}
          </p>
          <p>
            <span>Capital: </span>
            {country.capital}
          </p>
        </Info>
      </Link>
    </CardItem>
  );
}
