import styled from "styled-components";

const scrollSection = styled.section`
  position: absolute;
  width: 100%;
  height: 100svh;

  overflow-y: auto;
  overscroll-behavior-y: contain;
  scroll-snap-type: y mandatory;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

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
  scroll-snap-align: center;
`;

const aboutMainContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const aboutMeSection = styled.section`
  scroll-snap-align: center;
  margin-top: 5vh;
`;

export default { loadAnimation, aboutMeHeader, aboutMainContainer, aboutMeSection, scrollSection };
