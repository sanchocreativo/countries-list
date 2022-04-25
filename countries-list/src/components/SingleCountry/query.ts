import { gql } from '@apollo/client';

export const QUERY_COUNTRY = gql`
  query Country($code: ID!) {
    country(code: $code) {
      code
      name
      native
      emoji
      currency
      capital
      continent {
        code
        name
      }
      languages {
          code
          name
      }
    }
  }
`;