import styled, { css } from 'styled-components';

const mobileQuery = css`
  @media (min-width: 320px) {
    gap: 3rem;
  }
`;

const SearchInputMobile = css`
  @media (min-width: 320px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 480px;
  }
`;

const SearchBarComponent = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.25rem 0 3rem;
  flex-wrap: wrap;
  color: ${(props) => props.theme.colors.text};
  ${mobileQuery}

  span {
    color: ${(props) => props.theme.colors.input};
    position: absolute;
    top: 18px;
  }
`;

const Form = styled.form`
  position: relative;
  ${SearchInputMobile}
  span {
    left: 23px;
  }
`;

const SearchInput = styled.input`
  padding: 1.2rem 2rem 1.2rem 4rem;

  border: none;
  color: ${(props) => props.theme.colors.input};
  background: ${(props) => props.theme.colors.elements};
  font-size: var(--fz-100);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  ${SearchInputMobile}

  &::placeholder {
    color: inherit;
  }
`;

export { SearchBarComponent, Form, SearchInput };
