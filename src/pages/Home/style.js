import styled, { css } from 'styled-components';

const mobileHomeQuery = css`
  @media (min-width: 320px) {
    padding: 1.25rem;
  }
  @media (min-width: 768px) {
    padding: 1.8rem 3.75rem;
  }
`;

const HomeComponent = styled.main`
  ${mobileHomeQuery}
`;

export default HomeComponent;
