import styled, { css } from 'styled-components';

const mobileListQuery = css`
  @media (min-width: 320px) {
    gap: 2.8rem;
  }

  @media (min-width: 768px) {
    gap: 4.6rem;
  }
`;

const ListComponent = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 1320px;
  justify-content: center;
  margin: 0 auto;
  ${mobileListQuery}
`;

export default ListComponent;
