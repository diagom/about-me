import React from "react";
import style from "components/Ancient-paper/Ancient-Paper.style";

interface IAncientPaper {
  children?: React.ReactNode;
  height?: string;
  width?: string;
}

const AncientPaper = ({ children }: IAncientPaper) => (
  <>
    <style.paperStyle></style.paperStyle>

    <style.paperContainer>{children}</style.paperContainer>

    <svg height={0}>
      <filter id="wavy2">
        <feTurbulence x="0" y="0" baseFrequency="0.02" numOctaves="5" seed="1" />
        <feDisplacementMap in="SourceGraphic" scale="30" />
      </filter>
    </svg>
  </>
);

export default AncientPaper;
