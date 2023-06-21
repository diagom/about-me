import styled from "styled-components";

const aboutMeHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 5vh;
  overflow: hidden;
`;

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
    height: calc((1vw + 1vh) * 3);
  }
`;

const aboutMeMainText = styled.span`
  font-size: calc((1vw + 1vh) * 3);
`;

const aboutMeSubText = styled.span`
  font-size: calc((1vw + 1vh) * 1.25);
`;

export default { aboutMeMainText, aboutMeContainer, textBox, aboutMeSubText, aboutMeHeader };
