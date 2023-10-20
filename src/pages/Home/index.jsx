import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContries } from '../../services/axios';
import CardList from '../../components/CardList';
import HomeComponent from './style';
import SearchBar from '../../components/SearchBar';
import { mapData, sortData } from '../../utils/utils';
import { requestSuccess, errorApi } from '../../store/modules/actions';
import PageError from '../PageError';

export default function Home() {
  const apiErrorMessage = useSelector((state) => state.reducer.message);

  const dispatch = useDispatch();

  useEffect(() => {
    async function getAllContries() {
      try {
        const response = await fetchContries();
        const mappedAndSortedData = mapData(sortData(response));
        dispatch(requestSuccess(mappedAndSortedData));
      } catch (error) {
        dispatch(errorApi(error));
      }
    }
    getAllContries();
  }, [dispatch]);

  return (
    <HomeComponent>
      <SearchBar />

      {apiErrorMessage ? <PageError message={apiErrorMessage} /> : <CardList />}
    </HomeComponent>
  );
}
