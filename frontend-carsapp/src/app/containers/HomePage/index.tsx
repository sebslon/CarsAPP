import styled from "styled-components";
import tw from "twin.macro";

import { BookCard } from "../../components/BookCard";
import { Footer } from "../../components/Footer";
import { Marginer } from "../../components/Marginer";
import { NavBar } from "../../components/NavBar";
import { AboutUs } from "./AboutUs";
import { BookingSteps } from "./BookingSteps";
import { TopCars } from "./TopCars";
import { TopSection } from "./TopSection";

export function HomePage() {
  return (
    <PageContainer>
      <NavBar />
      <TopSection />
      <Marginer direction="vertical" margin="4em" />
      <BookCard />
      <Marginer direction="vertical" margin="6em" />
      <BookingSteps />
      <Marginer direction="vertical" margin="5em" />
      <AboutUs />
      <Marginer direction="vertical" margin="5em" />
      <TopCars />
      <Footer />
    </PageContainer>
  );
}

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
  `}
`;
