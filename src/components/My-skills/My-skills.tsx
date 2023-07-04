import style from "components/My-skills/My-skills.style";
import AncientPaper from "components/Ancient-paper";
import html from "assets/html-5.svg";
import nodejs from "assets/nodejs.svg";

const MySkills = () => (
  <AncientPaper>
    <style.constainer>
      <style.columnDisplay>
        <div>
          <style.icons>
            <img src={html} />
          </style.icons>
          <style.mainTitle>Frontend </style.mainTitle>
          <style.text>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</style.text>
        </div>
        <div>
          <style.secondTitle>Dev languages:</style.secondTitle>
          <style.text>typeScript, javaScript, html CSS, Sass</style.text>
        </div>
        <div>
          <style.secondTitle>Dev libraries and frameworks:</style.secondTitle>
          <style.listContainer>
            <li>React</li>
            <li>Angular</li>
            <li>React native</li>
            <li>Redux</li>
            <li>jest</li>
          </style.listContainer>
        </div>
      </style.columnDisplay>
      <style.columnDisplay>
        <div>
          <style.icons>
            <img src={nodejs} />
          </style.icons>
          <style.mainTitle>BackEnd </style.mainTitle>
          <style.text>
            I value the challenge of create simple code structure for innovative and complex products.
          </style.text>
        </div>
        <div>
          <style.secondTitle>Dev languages:</style.secondTitle>
          <style.text>NodeJs, Python</style.text>
        </div>
        <div>
          <style.secondTitle>Dev libraries and frameworks:</style.secondTitle>
          <style.listContainer>
            <li>Django</li>
            <li>Next.JS</li>
            <li>Mocha</li>
            <li>Jest</li>
          </style.listContainer>
        </div>
      </style.columnDisplay>
    </style.constainer>
  </AncientPaper>
);

export default MySkills;
