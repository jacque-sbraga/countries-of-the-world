import React from 'react';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { Form, SearchBarComponent, SearchInput } from './searchbar';
import Filter from './Filter';

export default function SearchBar({ handleSelectedRegion, searchTerm, handleSearch }) {
  return (
    <SearchBarComponent>
      <Form action=''>
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
