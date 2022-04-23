import { gql } from '@apollo/client';

export const QUERY_COUNTRY = gql`
  query Country($code: ID!) {
    country(code: $code) {
      name
      native
      emoji
      currency
      languages {
          code
          name
      }
    }
  }
`;