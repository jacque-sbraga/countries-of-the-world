import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from '@phosphor-icons/react';
import {
  DetailsComponent,
  BackButton,
  CountryDescription,
  CountryImage,
  CountryDetails,
  CountryDetailElements,
  BorderCountries,
} from './details';

import {
  joinCurrencyArrayToString,
  joinLanguagesObjectToString,
  findBordersCountry,
} from '../../utils/utils';

export default function Details() {
  const { id } = useParams();
  const data = useSelector((state) => state.reducer.data);
  const [country] = data.filter((item) => item.id === id);
  const currencies = joinCurrencyArrayToString(country.currencies);
  const languages = joinLanguagesObjectToString(country.languages);
  const borders = findBordersCountry(data, country.borders);

  return (
    <DetailsComponent>
      <Link to='/'>
        <BackButton>
          <ArrowLeft size={16} weight='bold' /> Back
        </BackButton>
      </Link>
      <CountryDescription>
        <CountryImage>
          <img src={country.flags.svg} alt={country.name} />
        </CountryImage>
        <CountryDetails>
          <h2>{country.name}</h2>
          <CountryDetailElements>
            <div>
              <p>
                <span>Native Name: </span>
                {country.name}
              </p>
              <p>
                <span>Population: </span>
                {country.population}
              </p>
              <p>
                <span>Region: </span>
                {country.region}
              </p>
              <p>
                <span>Sub Region: </span>
                {country.subRegion}
              </p>
              <p>
                <span>Capital: </span>
                {country.capital}
              </p>
            </div>

            <div>
              <p>
                <span>Top Level Domain: </span>
                {country.tld}
              </p>
              <p>
                <span>Currencies: </span>
                {currencies}
              </p>
              <p>
                <span>Languages </span>
                {languages}
              </p>
            </div>
          </CountryDetailElements>
          <BorderCountries>
            <p>
              <span>Border Countries: </span>
              {borders.length === 0
                ? `${country.name} has no borders with other countries.`
                : borders.map((border) => {
                    return (
                      <Link to={`../country/${border.id}`} key={border.name}>
                        {border.name}
                      </Link>
                    );
                  })}
            </p>
          </BorderCountries>
        </CountryDetails>
      </CountryDescription>
    </DetailsComponent>
  );
}
