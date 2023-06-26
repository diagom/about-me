import style from "App-style";
import AboutMeHeader from "components/About-Me-Header";
import SocialMidia from "components/Social-Medias";
import TimeLine from "components/Time-Line";

const App = () => (
  <>
    <SocialMidia />

    <style.aboutMeHeader>
      <style.loadAnimation>
        <AboutMeHeader />
      </style.loadAnimation>
    </style.aboutMeHeader>
    <style.aboutMainContainer>
      <TimeLine />
    </style.aboutMainContainer>
    <footer></footer>
  </>
);

export default App;
