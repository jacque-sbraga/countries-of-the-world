import React from 'react';
import Container from './container';

// eslint-disable-next-line react/prop-types
export default function ContainerComponent({ children }) {
  return <Container>{children}</Container>;
}
