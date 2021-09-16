import { gql } from "graphql-tag";

const foodFragment = gql`
  fragment FoodFragment on Food {
    id
    name
    caloriesPerServing
  }
`;

const query = gql`
  ${foodFragment}
  query NamedDogsQuery {
    dogs {
      id
      name
      aliasedAge: age
      favouriteFood: {
        ...FoodFragment
      }
      height
    }
  }
`;
