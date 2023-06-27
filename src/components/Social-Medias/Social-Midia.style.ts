import styled from "styled-components";

const iconsConstainer = styled.div`
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 0;
  width: 48px;
  top: 80vh;
  left: 7vw;
  z-index: 2;

  @keyframes slideInFromButtom {
    0% {
      top: 130vh;
    }
    100% {
      top: 80vh;
    }
  }

  @media (max-width: 1023px) {
    display: none;
  }

  animation: 2s ease-out 0s 1 slideInFromButtom;
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
