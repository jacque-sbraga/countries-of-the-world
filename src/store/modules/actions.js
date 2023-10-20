import * as types from './types';

export function switchTheme() {
  return {
    type: types.DARK_THEME,
  };
}

export function filterList(data) {
  return {
    type: types.FILTERED_LIST,
    result: data,
  };
}

export function requestSuccess(data) {
  return {
    type: types.FETCH_DATA_SUCCESS,
    payload: data,
  };
}

export function errorApi(data) {
  return {
    type: types.ERROR_API,
    message: data,
  };
}

export function requestError() {
  return {
    type: types.FETCH_DATA_ERROR,
  };
}
