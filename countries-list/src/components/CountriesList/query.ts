import { gql } from '@apollo/client';

export const QUERY_COUNTRIES_LIST = gql`
  query CountriesList {
    countries {
      name
      native
      emoji
      currency
      code
      continent{
        name
        code
      }
      languages {
          code
          name
      }
    }
    continents {
      code
      name
    }
  }
`;
