import React, { useState, useEffect } from 'react';
import { fetchContries } from '../../services/axios';
import CardList from '../../components/CardList';
import HomeComponent from './style';
import SearchBar from '../../components/SearchBar';
import { mapData, sortData, filteredCountries } from '../../utils/utils';
import PageError from '../PageError';

export default function Home() {
  const [countryList, setCountryList] = useState([]);
  const [filteredCountryList, setFilteredCountryList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [apiError, setApiError] = useState('');
  const isFilteredListEmpty = filteredCountryList.length === 0;

  const handleSelectedRegion = (value) => {
    setSelectedRegion(value);
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  useEffect(() => {
    async function getAllContries() {
      try {
        const response = await fetchContries();
        const mappedAndSortedData = mapData(sortData(response));
        setCountryList(mappedAndSortedData);
      } catch (error) {
        setApiError(error);
      }
    }
    getAllContries();
  }, []);

  useEffect(() => {
    const filteredList = filteredCountries(countryList, searchTerm, selectedRegion);
    setFilteredCountryList(filteredList);

    if (searchTerm !== '' && filteredList.length === 0) {
      return setApiError('Sorry, the country was not found.');
    }
    return setApiError('');
  }, [searchTerm, selectedRegion, countryList]);

  return (
    <HomeComponent>
      <SearchBar
        handleSelectedRegion={handleSelectedRegion}
        searchTerm={searchTerm}
        handleSearch={handleSearch}
      />

      {apiError ? (
        <PageError message={apiError} />
      ) : (
        <CardList info={isFilteredListEmpty ? countryList : filteredCountryList} />
      )}
    </HomeComponent>
  );
}
