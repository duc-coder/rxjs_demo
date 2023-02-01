import { Link } from "react-router-dom";
import { AppRoutes } from "../../../routes";
import "./PeriodRecalculateAsyncDataNavBar.scss";

const PeriodRecalculateAsyncDataNavBar = () => (
  <div className="PeriodRecalculateAsyncDataNavBar">
    <ul className="content-list">
      <li className="item">
        <Link className="link" to={AppRoutes.recalculatePromise.path}>
          Promise
        </Link>
      </li>
      <li className="item">
        <Link className="link" to={AppRoutes.recalculateRxJS.path}>
          RxJS
        </Link>
      </li>
    </ul>
  </div>
);

export default PeriodRecalculateAsyncDataNavBar;
