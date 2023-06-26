import styled from "styled-components";

const aboutMeContainer = styled.section`
  width: 100%;

  display: flex;

  overflow: hidden;
`;

const textBox = styled.div`
  width: 250px;
  margin-inline: 20px;

  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const textTitle = styled.div`
  margin-top: 5%;
`;
const text = styled.div`
  margin-top: 5%;
`;

export default { aboutMeContainer, textBox, textTitle, text };
