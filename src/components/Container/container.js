import styled from 'styled-components';

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  transition: background-color 0.2s ease-in;
  min-height: 100vh;
`;

export default Container;
