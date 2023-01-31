import { Props } from "../../App";
import "./StartOneFromAnother.scss";
import StartOneFromAnotherNavBar from "./StartOneFromAnotherNavBar/StartOneFromAnotherNavBar";

const StartOneFromAnother = (props?: Props) => {
  return (
    <div className="StartOneFromAnother">
      <StartOneFromAnotherNavBar />
      <div className="content-container">{props && props.children}</div>
    </div>
  );
};

export default StartOneFromAnother;
