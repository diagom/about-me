import style from "App-style";
import AboutMeHeader from "components/About-Me-Header";
import SocialMidia from "components/Social-Medias";

const App = () => (
  <>
    <SocialMidia />

    <style.aboutMeHeader>
      <style.loadAnimation>
        <AboutMeHeader />
      </style.loadAnimation>
    </style.aboutMeHeader>
    <main></main>
    <footer></footer>
  </>
);

export default App;
