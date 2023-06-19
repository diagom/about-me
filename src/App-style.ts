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
`;

const aboutMeMainText = styled.div`
  font-size: 70px;
`;

const aboutMeSubText = styled.div`
  font-size: 30px;
`;

const aboutMeButton = styled.div`
  width: 175px;

  background-color: blue;

  cursor: pointer;
`;

export default { aboutMeMainText, aboutMeContainer, textBox, aboutMeSubText, aboutMeButton };
