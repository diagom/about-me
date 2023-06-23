import styled from "styled-components";

const loadAnimation = styled.div`
  @keyframes slideInFromTop {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }

  animation: 2s ease-out 0s 1 slideInFromTop;
`;

const aboutMeHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 5vh;
  overflow: hidden;
`;

export default { loadAnimation, aboutMeHeader };
