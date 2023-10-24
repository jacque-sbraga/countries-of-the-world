import styled from 'styled-components';

const FilterComponent = styled.div`
  padding: 1.2rem 2rem;
  width: 200px;
  color: inherit;
  background: ${(props) => props.theme.colors.elements};
  font-size: var(--fz-100);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  position: relative;
  cursor: pointer;

  span {
    right: 23px;
  }
`;

const FilterSelect = styled.div`
  display: ${(props) => props['data-showfilter']};
  width: 200px;
  background-color: ${(props) => props.theme.colors.elements};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-top: 5px;
  padding: 1rem;
  font-size: var(--fz-100);
  line-height: 1;
  position: absolute;
  z-index: 10;

  li {
    cursor: pointer;
    transition: all 0.1s ease;
    &:hover {
      font-weight: var(--fw-semi);
    }
  }

  li + li {
    margin-top: 0.9rem;
  }
`;

export { FilterComponent, FilterSelect };
