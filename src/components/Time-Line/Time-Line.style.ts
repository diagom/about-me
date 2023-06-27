import styled from "styled-components";

const aboutMeContainer = styled.section`
  width: 50%;
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
  justify-content: center;
`;

const textBox = styled.div<{ $isOnTheLeft?: boolean }>`
  min-width: 45%;

  ${(props) => (props?.$isOnTheLeft ? "margin-left: 45%; text-align: end;" : "margin-right: 45%;")};

  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const sideBlock = styled.div`
  min-width: 45%;
`;

const textTitle = styled.div`
  width: 100%;
  font-size: calc((0.7vw + 0.7vh) + 1rem);
`;

const text = styled.div`
  font-size: calc((0.5vw + 0.5vh) + 0.5rem);
`;

export default { aboutMeContainer, textBox, textTitle, text, sideBlock };
