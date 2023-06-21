import style from "components/Ancient-paper/Ancient-Paper.style";
import medievalBorder from "assets/medieval-border.svg";

interface IAncientPaper {
  children?: React.ReactNode;
  height?: string;
  width?: string;
}

const AncientPaper = ({ children }: IAncientPaper) => (
  <>
    <style.paperStyle></style.paperStyle>

    <style.paperBorderTop>
      <img src={medievalBorder} />
    </style.paperBorderTop>

    <style.paperBorderBottom>
      <img src={medievalBorder} />
    </style.paperBorderBottom>

    <svg height={0}>
      <filter id="wavy2">
        <feTurbulence x="0" y="0" baseFrequency="0.02" numOctaves="5" seed="1" />
        <feDisplacementMap in="SourceGraphic" scale="30" />
      </filter>
    </svg>

    <style.paperContainer>{children}</style.paperContainer>
  </>
);

export default AncientPaper;
