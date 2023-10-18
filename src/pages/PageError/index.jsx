import React from 'react';

import ErrorComponent from './style';
import history from '../../services/history';

export default function PageError({ message }) {
  history.push('/');
  return (
    <ErrorComponent>
      <p>{message}</p>
    </ErrorComponent>
  );
}
