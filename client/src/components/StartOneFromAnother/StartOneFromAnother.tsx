import { Props } from "../../App";
import "./StartOneFromAnother.scss";
import StartOneFromAnotherNavBar from "./StartOneFromAnotherNavBar/StartOneFromAnotherNavBar";

const StartOneFromAnother = (props?: Props) => {
  return (
    <div className="StartOneFromAnother">
      <StartOneFromAnotherNavBar />
      {props && props.children}
    </div>
  );
};

export default StartOneFromAnother;
