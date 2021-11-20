import gql from "graphql-tag";

export const GET_ALL_CARS_QUERY = gql`
  query GetCars {
    cars {
      id
      name
      mileage
      gearType
      gas
      thumbnailUrl
      dailyPrice
      monthlyPrice
    }
  }
`;
