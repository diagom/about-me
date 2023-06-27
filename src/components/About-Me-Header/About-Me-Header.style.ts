import styled from "styled-components";

const aboutMeContainer = styled.section`
  height: 100vh;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
`;

const textBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  span {
    line-height: calc((1vw + 1vh) + 3rem);

    @media (max-width: 1023px) {
      line-height: 1.875rem;
    }
  }
`;

const aboutMeMainText = styled.span`
  font-size: calc((1vw + 1vh) + 3rem);
  @media (max-width: 1023px) {
    font-size: 1.875rem;
  }
`;

const aboutMeSubText = styled.span`
  font-size: calc((1vw + 1vh) + 1rem);
  @media (max-width: 1023px) {
    font-size: 0.8rem;
  }
`;

export default { aboutMeMainText, aboutMeContainer, textBox, aboutMeSubText };
