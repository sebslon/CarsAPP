import styled from "styled-components";
import tw from "twin.macro";

import CarLogo from "../../../assets/images/car-logo.png";
import CarLogoDark from "../../../assets/images/car-logo-dark.png";

interface ILogoProps {
  color?: "white" | "dark";
  bgColor?: "white" | "dark";
}

export function Logo(props: ILogoProps) {
  const { color, bgColor } = props;

  return (
    <LogoContainer>
      <Image>
        <img src={bgColor === "dark" ? CarLogoDark : CarLogo} alt="logo" />
      </Image>
      <LogoText color={color || "dark"}>YourCar</LogoText>
    </LogoContainer>
  );
}

const LogoContainer = styled.div`
  ${tw`
    flex
    items-center
  `}
`;

const LogoText = styled.div`
  ${tw`
    text-xl
    font-bold
    text-black
    m-1
    `}
  ${({ color }: any) => (color === "white" ? tw`text-white` : tw`text-black`)}
`;

const Image = styled.div`
  width: auto;

  ${tw`
    h-6
    md:h-9
  `}

  img {
    width: auto;
    height: 100%;
  }
`;
