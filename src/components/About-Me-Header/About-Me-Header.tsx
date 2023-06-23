import style from "components/About-Me-Header/About-Me-Header.style";
import AncientPaper from "components/Ancient-paper";

const aboutMeHeader = () => (
  <>
    <AncientPaper>
      <style.aboutMeContainer>
        <style.textBox>
          <style.aboutMeMainText>Hello. </style.aboutMeMainText>
          <style.aboutMeMainText>I am Diego </style.aboutMeMainText>
          <style.aboutMeSubText>I'm a web developer</style.aboutMeSubText>
        </style.textBox>
      </style.aboutMeContainer>
    </AncientPaper>
  </>
);

export default aboutMeHeader;
