import styled from "styled-components";

const dotMapContainer = styled.div`
  position: relative;
  visibility: hidden;
  height: 100%;

  @keyframes borderGrowUp {
    0% {
      clip-path: inset(5% 4% 84% 5%);
    }
    100% {
      clip-path: inset(5% 4% 0 5%);
      visibility: visible;
    }
  }

  &:after {
    visibility: visible;
  }

  animation-name: borderGrowUp;
  animation-delay: 1.3s;
  animation-duration: 8s;
  animation-fill-mode: forwards;
  animation-timing-function: ease;
`;

const dotMapSvg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

export default { dotMapContainer, dotMapSvg };
