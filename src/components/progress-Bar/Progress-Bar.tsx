import style from "components/progress-Bar/Progress-Bar.style";

const ProgressBar = (props: { width: string }) => (
  <>
    <style.progressBarContainer>
      <style.progressBar $width={props.width}>
        <style.progressBarLight />
      </style.progressBar>
    </style.progressBarContainer>
  </>
);

export default ProgressBar;
