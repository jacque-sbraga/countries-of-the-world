import styled, { css } from 'styled-components';

const QueryDetailsComponent = css`
  @media (max-width: 767px) {
    padding: 1.8rem;
  }
`;

const QueryCountryDescription = css`
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

const QueryCountryImage = css`
  @media (max-width: 1024px) {
    width: 80%;
  }
`;

const QueryCountryDetails = css`
  @media (max-width: 1024px) {
    width: 80%;
    padding: 3rem 0 0 0;
  }
`;

const QueryCountryDetailElements = css`
  @media (max-width: 1024px) {
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 3rem;
  }
`;

const Button = css`
  background-color: ${(props) => props.theme.colors.elements};
  box-shadow:
    2px 2px 4px rgba(0, 0, 0, 0.1),
    -2px -2px 4px rgba(0, 0, 0, 0.1);

  border-radius: 6px;
`;

const DetailsComponent = styled.main`
  padding: 3.75rem;
  ${QueryDetailsComponent}
`;

const BackButton = styled.span`
  ${Button};
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: 120px;
  justify-content: center;
  padding: 6px 0;
`;

const CountryDescription = styled.div`
  display: flex;
  margin-top: 3.75rem;
  ${QueryCountryDescription}
`;

const CountryImage = styled.div`
  width: 40%;
  ${QueryCountryImage}
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const CountryDetails = styled.div`
  padding: 3rem 0 3rem 5.75rem;
  flex: 1;
  ${QueryCountryDetails}
  h2 {
    margin-bottom: 2.5rem;
  }
`;

const CountryDetailElements = styled.div`
  line-height: 1.562;
  display: flex;
  gap: 6.25rem;
  ${QueryCountryDetailElements};
  p {
    font-size: var(--fz-100);
    span {
      font-weight: var(--fw-semi);
    }
  }
`;

const BorderCountries = styled.div`
  margin-top: 3.75rem;
  p {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    align-items: center;
    font-size: var(--fz-100);
    span {
      font-weight: var(--fw-semi);
      margin-right: 15px;
    }

    a {
      ${Button};
      padding: 8px;
    }
  }
`;

export {
  DetailsComponent,
  BackButton,
  CountryDescription,
  CountryImage,
  CountryDetails,
  CountryDetailElements,
  BorderCountries,
};
