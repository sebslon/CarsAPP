import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import tw from "twin.macro";

import MoonLoader from "react-spinners/MoonLoader";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import { Car } from "../../components/Car";
import { SCREENS } from "../../components/responsive";
import { carService } from "../../services/carService";
import { GetCars_cars } from "../../services/carService/__generated__/GetCars";
import { setTopCars } from "./slice";
import { createSelector } from "reselect";
import { makeSelectTopCars } from "./selectors";

const actionDispatch = (dispatch: Dispatch) => ({
  setTopCars: (cars: GetCars_cars[]) => dispatch(setTopCars(cars)),
});

const stateSelector = createSelector(makeSelectTopCars, (topCars) => ({
  topCars,
}));

const EmptyCars = styled.div`
  ${tw`
    flex
    items-center
    justify-center
    w-full
    text-sm
    text-gray-500
  `}
`;

const LoadingContainer = styled.div`
  ${tw`
    flex
    mt-9
    items-center
    justify-center
    w-full
    text-sm
    text-black
  `}
`;

export function TopCars() {
  const [current, setCurrent] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  const { setTopCars } = actionDispatch(useDispatch());
  const { topCars } = useSelector(stateSelector);

  const fetchTopCars = async () => {
    setIsLoading(true);

    const cars = await carService.getCars().catch((err) => console.log(err));

    if (cars) setTopCars(cars);

    setIsLoading(false);
  };

  const isEmptyTopCars = !topCars || topCars.length === 0;

  const cars = isEmptyTopCars ? [] : topCars.map((car) => <Car {...car} />);

  const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length / 3);
  useEffect(() => {
    fetchTopCars();
  }, []);

  return (
    <TopCarsContainer>
      <Title>Explore Our Top Deals</Title>
      {isLoading && (
        <LoadingContainer>
          <MoonLoader loading size={20} />
        </LoadingContainer>
      )}
      {isEmptyTopCars && !isLoading && <EmptyCars>No Cars To Show</EmptyCars>}
      {!isEmptyTopCars && !isLoading && (
        <CarsContainer>
          <Carousel
            value={current}
            onChange={setCurrent}
            slides={cars}
            plugins={[
              {
                resolve: slidesToShowPlugin,
                options: { numberOfSlides: 3 },
              },
            ]}
            breakpoints={{
              640: {
                plugins: [
                  {
                    resolve: slidesToShowPlugin,
                    options: { numberOfSlides: 1 },
                  },
                ],
              },
              900: {
                plugins: [
                  {
                    resolve: slidesToShowPlugin,
                    options: { numberOfSlides: 2 },
                  },
                ],
              },
            }}
          />
          <Dots value={current} onChange={setCurrent} number={numberOfDots} />
        </CarsContainer>
      )}
    </TopCarsContainer>
  );
}

const TopCarsContainer = styled.div`
  ${tw`
    max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    justify-center
    pr-4
    pl-4
    md:pl-0
    md:pr-0
    mb-10
  `};
`;

const Title = styled.h2`
  ${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-extrabold
  `};
`;

const CarsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    justify-center
    mt-7
    md:mt-10
  `};
`;
