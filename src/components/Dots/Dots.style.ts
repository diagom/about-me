import styled from "styled-components";

const dotMapContainer = styled.div`
  position: relative;
  visibility: hidden;
  height: 100%;

  animation-delay: 1s;
  animation-duration: 8s;
  animation-fill-mode: forwards;
  animation-timing-function: ease;

  @keyframes mapGrowUp {
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

  @media (max-width: 1023px) {
    display: none;
  }
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
