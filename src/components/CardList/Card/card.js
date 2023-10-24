import styled from 'styled-components';

const CardItem = styled.li`
  width: 270px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.elements};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transform: scale(1);
  transition: transform 0.1s ease;
  &:hover {
    transform: scale(1.1);
  }

  div {
    width: 100%;
    height: 170px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 8px;
    }
  }
`;

const Info = styled.div`
  padding: 1.5rem;
  h2 {
    font-size: var(--fz-300);
    margin-bottom: 1rem;
  }
  p {
    font-size: var(--fz-100);
    line-height: 1.5;
    span {
      font-weight: var(--fw-semi);
    }
  }
`;

export { CardItem, Info };
