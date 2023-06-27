import style from "components/Time-Line/Time-Line.style";
import AncientPaper from "components/Ancient-paper";

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
  </>
);

export default TimeLine;
