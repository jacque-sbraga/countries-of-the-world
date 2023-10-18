import * as types from './types';

export function switchTheme() {
  return {
    type: types.DARK_THEME,
  };
}

export function requestSuccess() {
  return {
    type: types.FETCH_DATA_SUCCESS,
  };
}

export function requestError() {
  return {
    type: types.FETCH_DATA_ERROR,
  };
}
