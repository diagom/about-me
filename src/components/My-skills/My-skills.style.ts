import styled from "styled-components";

const constainer = styled.div`
  height: 90%;
  padding-inline: 15%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: baseline;
  align-content: space-evenly;

  @media (max-width: 500px) {
    display: block;
  }
`;

const columnDisplay = styled.div`
  padding-inline: 5%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 500px) {
    &:nth-child(2) {
      display: none;
    }
  }
`;

const icons = styled.div`
  img {
    width: 72px;
    height: 72px;
  }
`;

const mainTitle = styled.p`
  font-size: calc((0.7vw + 0.7vh) + 1rem);
  margin: 0;
`;

const secondTitle = styled.p`
  font-size: calc((0.5vw + 0.5vh) + 1rem);
  color: rgba(204, 0, 0);
  margin: 0;
`;

const text = styled.p`
  font-size: calc((0.1vw + 0.1vh) + 1rem);
  margin-top: 0;
`;

const listContainer = styled.ul`
  font-size: calc((0.1vw + 0.1vh) + 1rem);
  list-style: none;
  margin-top: 0;
  padding: 0;
`;

export default { constainer, columnDisplay, icons, mainTitle, secondTitle, text, listContainer };
