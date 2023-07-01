import style from "App-style";
import AboutMeHeader from "components/About-Me-Header";
import SocialMidia from "components/Social-Medias";
import TimeLine from "components/Time-Line";
import MySkills from "components/My-skills";

const App = () => (
  <>
    <SocialMidia />

    <style.aboutMeHeader>
      <style.loadAnimation>
        <AboutMeHeader />
      </style.loadAnimation>
    </style.aboutMeHeader>
    <style.aboutMainContainer>
      <style.aboutMeSection>
        <MySkills />
      </style.aboutMeSection>
      <style.aboutMeSection>
        <TimeLine />
      </style.aboutMeSection>
    </style.aboutMainContainer>
    <footer></footer>
  </>
);

export default App;
