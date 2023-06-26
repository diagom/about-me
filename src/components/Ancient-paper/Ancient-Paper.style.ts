import styled from "styled-components";

const propSize = (props: { $height?: string; $width?: string }) =>
  props.$height ? `height: ${props.$height}; width: ${props.$width}` : `height: 90vh; width: 90vw;`;

const paperContainer = styled.div<{ $height?: string; $width?: string }>`
  ${(props) => propSize(props)};

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
`;

const paperStyle = styled.div<{ $height?: string; $width?: string }>`
  ${(props) => propSize(props)};
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);

  z-index: -1;

  box-shadow: 2px 3px 20px black, 0 0 125px #8f5922 inset;
  background: #fffef0;
  filter: url(#wavy2);
`;

const paperBorderTop = styled.div<{ $height?: string; $width?: string }>`
  ${(props) => propSize(props)};
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 0);

  img {
    width: 50%;
    height: 50%;

    visibility: hidden;
    animation-name: borderGrowUp;
    animation-delay: 1.3s;
    animation-duration: 8s;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
  }

  @keyframes borderGrowUp {
    0% {
      clip-path: circle(0.5% at 0 0);
    }
    100% {
      clip-path: circle(140.9% at 0 0);
      visibility: visible;
    }
  }

  @media (max-width: 1024px) {
    display: none;
  }

  &:after {
    visibility: visible;
  }
`;

const paperBorderBottom = styled(paperBorderTop)`
  rotate: 180deg;
  top: 2%;
  left: 50%;

  transform: translate(50%, 0);
`;

export default { paperContainer, paperStyle, paperBorderTop, paperBorderBottom };
