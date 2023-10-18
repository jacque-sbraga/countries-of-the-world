import styled, { css } from 'styled-components';

const mobileHeaderQuery = css`
  @media (min-width: 320px) {
    padding: 1.25rem;
    font-size: var(--fz-100);
  }
  @media (min-width: 768px) {
    padding: 1.8rem 3.75rem;
    font-size: var(--fz-300);
  }
`;

const HeaderComponent = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.colors.elements};
  ${mobileHeaderQuery}
  h2 {
    font-weight: var(--fw-bold);
    font-size: inherit;
    transition: all 0.1s ease-in;
  }

  label {
    display: flex;
    gap: 10px;
    align-items: center;
    position: relative;
    font-size: var(--fz-100);
    font-weight: var(--fw-semi);

    input {
      position: absolute;
      width: 100%;
      height: 16px;
      opacity: 0;
      cursor: pointer;
    }
  }
`;

export default HeaderComponent;
