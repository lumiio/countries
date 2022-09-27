import { gql } from "@apollo/client";

export const COUNTRY = gql`
  fragment CountryQuery on Country {
    code
    name
    native
    phone
    continent {
        code
        name
    }
    capital
    currency
    languages {
        code
        name
        native
    }
    emoji
    emojiU
    states {
        code
        name
      }
  }
`;
