export const formatNumber = (num = 0) => {
  return num.toLocaleString('us').replaceAll('.', ',');
};

export const sortData = (array) => {
  const clonedArray = array.slice();
  clonedArray.sort((itemA, itemB) => {
    return itemA.name.common.localeCompare(itemB.name.common, undefined, {
      sensitivity: 'base',
      numeric: true,
    });
  });
  return clonedArray;
};

export const joinCurrencyArrayToString = (currencies) => {
  const keys = Object.keys(currencies);
  const currenciesList = keys.map((item) => {
    return currencies[item].name;
  });

  const currenciesString = currenciesList.join(', ');

  return currenciesString;
};

export const joinLanguagesObjectToString = (languages) => Object.values(languages).join(', ');

export const findBordersCountry = (data, borders) => {
  if (borders === undefined) return [];

  return data.filter((item) => {
    return borders.includes(item.id);
  });
};

export const mapData = (array) =>
  array.map((item) => ({
    name: item.name.common,
    languages: item.languages,
    id: item.cca3,
    population: item.population,
    region: item.region,
    subRegion: item.subregion,
    tld: item.tld,
    currencies: item.currencies,
    borders: item.borders,
    capital: item.capital,
    flags: item.flags,
  }));

export function filteredCountries(countries, searchTerm, selectedRegion) {
  let filtered =
    selectedRegion !== 'all' && selectedRegion !== ''
      ? countries.filter((country) => {
          return country.region.toLowerCase() === selectedRegion;
        })
      : [...countries];

  if (searchTerm) {
    filtered = filtered.filter((country) => country.name.toLowerCase().includes(searchTerm));
  }
  return filtered;
}
