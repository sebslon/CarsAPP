import { apolloClient } from "../../graphql";
import { GET_ALL_CARS_QUERY } from "./queries";
import { GetCars_cars } from "./__generated__/GetCars";

class CarService {
  public async getCars(): Promise<GetCars_cars[]> {
    const response = await apolloClient
      .query({ query: GET_ALL_CARS_QUERY })
      .catch((err) => {
        throw err;
      });

    if (response && response.data) {
      return response.data.cars as GetCars_cars[];
    }

    return [];
  }
}

export const carService = new CarService();
