import styled from "styled-components";

const iconsConstainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  width: 48px;
  bottom: 10vh;
  left: 7vw;
`;

const sword = styled.div`
  position: absolute;

  img {
    height: 250px;
    width: 200px;
  }
`;

const icons = styled.div`
  filter: grayscale(100%);
  transition: filter 400ms ease-in-out;

  cursor: pointer;

  z-index: 2;

  img {
    width: 38px;
    height: 38px;
    transition: width 400ms, height 400ms;
  }

  &:hover {
    filter: grayscale(0%);
    img {
      width: 48px;
      height: 48px;
    }
  }
`;

export default { iconsConstainer, sword, icons };
