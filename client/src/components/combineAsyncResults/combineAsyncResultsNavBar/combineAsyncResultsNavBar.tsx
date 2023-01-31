import { Link } from "react-router-dom";
import { AppRoutes } from "../../../routes";
import "./combineAsyncResultsNavBar.scss";

const CombineAsyncResultsNavBar = () => (
  <div className="CombineAsyncResultsNavBar">
    <ul className="content-list">
      <li className="item">
        <Link className="link" to={AppRoutes.combineAsyncResultsRxJS.path}>
          Promise
        </Link>
      </li>
      <li className="item">
        <Link className="link" to={AppRoutes.combineAsyncResultsRxJS.path}>
          RxJS
        </Link>
      </li>
    </ul>
  </div>
);

export default CombineAsyncResultsNavBar;
