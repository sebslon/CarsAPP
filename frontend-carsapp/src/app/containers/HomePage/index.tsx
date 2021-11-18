import styled from "styled-components";
import tw from "twin.macro";

import { NavBar } from "../../components/NavBar";
import { TopSection } from "./TopSection";

export function HomePage() {
  return (
    <PageContainer>
      <NavBar />
      <TopSection />
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
