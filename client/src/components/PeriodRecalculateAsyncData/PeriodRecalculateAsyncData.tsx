import { Props } from "../../App";
import "./PeriodRecalculateAsyncData.scss";
import PeriodRecalculateAsyncDataNavBar from "./PeriodRecalculateAsyncDataNavBar/PeriodRecalculateAsyncDataNavBar";

const PeriodRecalculateAsyncData = (props?: Props) => {
  return (
    <div className="PeriodRecalculateAsyncData">
      <PeriodRecalculateAsyncDataNavBar />
      <div className="content-container">{props && props.children}</div>
    </div>
  );
};

export default PeriodRecalculateAsyncData;
