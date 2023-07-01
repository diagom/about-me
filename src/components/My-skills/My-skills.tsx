import style from "components/My-skills/My-skills.style";
import AncientPaper from "components/Ancient-paper";
import ProgressBar from "components/progress-Bar";

const MySkills = () => (
  <>
    <AncientPaper>
      <div style={{ height: "40px", width: "500px" }}>
        <ProgressBar width="50%" />
      </div>
    </AncientPaper>
  </>
);

export default MySkills;
