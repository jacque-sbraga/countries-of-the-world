import * as types from './types';

const initialState = {
  darkMode: false,
  data: [],
  filteredList: [],
  message: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.DARK_THEME:
      return {
        ...state,
        darkMode: !state.darkMode,
      };

    case types.FILTERED_LIST:
      return {
        ...state,
        filteredList: action.result,
      };

    case types.FETCH_DATA_REQUEST:
      return {
        ...state,
        data: action.payload,
      };

    case types.FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };

    case types.FETCH_DATA_ERROR:
      return {
        ...state,
        data: action.payload,
      };

    case types.ERROR_API:
      return {
        ...state,
        message: action.message,
      };

    default:
      return state;
  }
}
