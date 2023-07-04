import style from "components/Time-Line/Time-Line.style";
import AncientPaper from "components/Ancient-paper";
import Dots from "components/Dots";

const nodes = [
  { x: 65, y: 15, done: true },
  { x: 40, y: 30, done: true },
  { x: 60, y: 45, done: true },
  { x: 30, y: 55, done: true },
  { x: 60, y: 70, done: true },
  { x: 40, y: 85 }
];

const links = [
  { s: 0, d: 1 },
  { s: 1, d: 2 },
  { s: 2, d: 3 },
  { s: 3, d: 4 },
  { s: 4, d: 5 }
];

const TimeLine = () => (
  <>
    <AncientPaper>
      <style.aboutMeContainer>
        <style.textBox>
          <style.textTitle>MMXVIII/2018</style.textTitle>
          <style.text>I started my journey towards a degree in Systems Analysis and Development</style.text>
        </style.textBox>

        <style.textBox $isOnTheLeft>
          <style.textTitle>MMXIX/2019</style.textTitle>
          <style.text>I started my journey as an intern at a software consultancy</style.text>
        </style.textBox>

        <style.textBox>
          <style.textTitle>MMXX/2020</style.textTitle>
          <style.text>After many battles i leveled up to a junior developer</style.text>
        </style.textBox>

        <style.textBox $isOnTheLeft>
          <style.textTitle>MMXXI/2021</style.textTitle>
          <style.text>After countless battles i leveled up to a mid developer</style.text>
        </style.textBox>

        <style.textBox>
          <style.textTitle>MMXXII/2022</style.textTitle>
          <style.text>
            I leave my kingdom to start my journey in the kingdom of Ireland, to learn your language better
          </style.text>
        </style.textBox>

        <style.textBox $isOnTheLeft>
          <style.textTitle>MMXXIII/2023</style.textTitle>
          <style.text>Now this noble knight is looking for a new kingdom to do his services</style.text>
        </style.textBox>
      </style.aboutMeContainer>
    </AncientPaper>

    <style.dotsContainer>
      <Dots width={"100%"} height={"100%"} nodes={nodes} links={links} />
    </style.dotsContainer>
  </>
);

export default TimeLine;
