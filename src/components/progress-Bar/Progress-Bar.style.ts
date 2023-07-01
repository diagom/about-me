import styled from "styled-components";

const progressBarContainer = styled.div`
  width: 80%;
  height: 80%;
  border-radius: 2rem;
  position: relative;
  border: 2px solid #e76f51;

  z-index: 2;
`;

const progressBar = styled.div<{ $width: string }>`
  height: 100%;
  background-color: #e76f51;
  border-radius: 2rem;

  animation-name: progressGrowUp;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-timing-function: ease;

  @keyframes progressGrowUp {
    0% {
      width: 0;
    }
    100% {
      width: ${(props) => props.$width};
    }
  }

  &:after {
    width: ${(props) => props?.$width};
  }
`;

const progressBarLight = styled.div`
  position: relative;
  width: 22px;
  height: 50%;
  visibility: unset;

  z-index: -1;

  box-shadow: 0px 0px 50px 20px rgba(0, 0, 0, 1);
  border-radius: 50%;

  animation-name: light;
  animation-duration: 3s;
  animation-iteration-count: infinite;

  @keyframes light {
    0% {
      left: 10%;
    }
    100% {
      left: 80%;
    }
  }
`;

export default { progressBar, progressBarContainer, progressBarLight };
