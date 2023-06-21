import style from "components/Social-Medias/Social-Midia.style";
import github from "assets/github.svg";
import instagram from "assets/instagram.svg";
import linkedin from "assets/linkedin.svg";
import sword from "assets/sword.svg";

const SocialMidia = () => (
  <style.iconsConstainer>
    <style.icons onClick={() => window.open("https://github.com/diagom", "_blank")}>
      <img src={github} />
    </style.icons>
    <style.icons onClick={() => window.open("https://instagram.com/mitichon_diego", "_blank")}>
      <img src={instagram} />
    </style.icons>
    <style.icons onClick={() => window.open("https://www.linkedin.com/in/diego-araujo-santana-aa0346183/", "_blank")}>
      <img src={linkedin} />
    </style.icons>
    <style.sword>
      <img src={sword} />
    </style.sword>
  </style.iconsConstainer>
);

export default SocialMidia;
