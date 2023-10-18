import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: 'COUNTRIES-APP',
      storage,
      whitelist: ['reducer'],
    },
    reducers,
  );
  return persistedReducers;
};
