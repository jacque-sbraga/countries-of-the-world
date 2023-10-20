/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { CaretDown } from '@phosphor-icons/react';
import { FilterComponent, FilterSelect } from './filter';

export default function Filter({ handleSelectedRegion }) {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('Filter by Region');

  const handleFilterVisible = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const handleRegion = ({ target }) => {
    if (target.tagName === 'LI') {
      const region = target.textContent.toLowerCase();

      setSelectedRegion(region);
      handleSelectedRegion(region);
      setIsFilterVisible(!isFilterVisible);
    }
  };
  return (
    <div>
      <FilterComponent onClick={handleFilterVisible}>
        {selectedRegion}
        <span>
          <CaretDown size={20} />
        </span>
      </FilterComponent>
      <FilterSelect showfilter={isFilterVisible ? 'initial' : 'none'}>
        <ul onClick={handleRegion}>
          <li>All</li>
          <li>Africa</li>
          <li>Americas</li>
          <li>Asia</li>
          <li>Europe</li>
          <li>Oceania</li>
        </ul>
      </FilterSelect>
    </div>
  );
}
