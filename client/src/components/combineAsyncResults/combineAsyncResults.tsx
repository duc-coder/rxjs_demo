import { Props } from "../../App";
import "./combineAsyncResults.scss";
import CombineAsyncResultsNavBar from "./combineAsyncResultsNavBar/combineAsyncResultsNavBar";

const CombineAsyncResults = (props?: Props) => {
  return (
    <div className="CombineAsyncResults">
      <CombineAsyncResultsNavBar />
      <div className="content-container">{props && props.children}</div>
    </div>
  );
};

export default CombineAsyncResults;
