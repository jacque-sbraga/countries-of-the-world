import axios from 'axios';

const baseURL = 'https://restcountries.com/v3.1';
let resource = 'all';

const fetchContries = async (param = 'all') => {
  resource = param === 'all' ? param : `region/${param}`;

  try {
    const response = await axios.get(`${baseURL}/${resource}`);
    return response.data;
  } catch (error) {
    throw new Error('An error occurred while fetching the countries. Please try again later.');
  }
};

export { fetchContries };
