import style from "App-style";
import AncientPaper from "components/Ancient-paper";
import SocialMidia from "components/Social-Medias";

const App = () => (
  <>
    <SocialMidia />

    <style.aboutMeHeader>
      <AncientPaper>
        <style.aboutMeContainer>
          <style.textBox>
            <style.aboutMeMainText>Hello. </style.aboutMeMainText>
            <style.aboutMeMainText>I am Diego </style.aboutMeMainText>
            <style.aboutMeSubText>I'm a web developer</style.aboutMeSubText>
          </style.textBox>
        </style.aboutMeContainer>
      </AncientPaper>
    </style.aboutMeHeader>
    <main></main>
    <footer></footer>
  </>
);

export default App;
