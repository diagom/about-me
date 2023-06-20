import styled from "styled-components";

const paperContainer = styled.div<{ $height?: string; $width?: string }>`
  ${(props) => (props.$height ? `height: ${props.$height}; width: ${props.$width}` : `height: 90vh; width: 90vw;`)};

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
`;

const paperStyle = styled.div<{ $height?: string; $width?: string }>`
  ${(props) => (props.$height ? `height: ${props.$height}; width: ${props.$width}` : `height: 90vh; width: 90vw;`)};

  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);

  z-index: -1;

  box-shadow: 2px 3px 20px black, 0 0 125px #8f5922 inset;
  background: #fffef0;
  filter: url(#wavy2);
`;

export default { paperContainer, paperStyle };
