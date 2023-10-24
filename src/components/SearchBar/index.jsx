import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { Form, SearchBarComponent, SearchInput } from './searchbar';
import Filter from './Filter';
import { filteredCountries } from '../../utils/utils';
import { filterList, errorApi } from '../../store/modules/actions';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const data = useSelector((state) => state.reducer.data);

  const dispatch = useDispatch();

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const handleSelectedRegion = (value) => {
    setSelectedRegion(value);
  };

  useEffect(() => {
    const filtered = filteredCountries(data, searchTerm, selectedRegion);
    dispatch(filterList(filtered));

    dispatch(errorApi(''));
    if (searchTerm !== '' && filtered.length === 0) {
      dispatch(errorApi('Sorry, the country was not found.'));
    }
  }, [dispatch, searchTerm, selectedRegion, data]);

  return (
    <SearchBarComponent>
      <Form action='#'>
        <span>
          <MagnifyingGlass size={20} />
        </span>
        <SearchInput
          type='text'
          placeholder='Search for a ...'
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </Form>
      <Filter handleSelectedRegion={handleSelectedRegion} />
    </SearchBarComponent>
  );
}
