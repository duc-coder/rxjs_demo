import { Link } from "react-router-dom";
import { AppRoutes } from "../../../routes";
import "./StartOneFromAnotherNavBar.scss";

const StartOneFromAnotherNavBar = () => (
  <div className="StartOneFromAnotherNavBar">
    <ul className="content-list">
      <li className="item">
        <Link className="link" to={AppRoutes.startOneFromAnotherPromise.path}>
          Promise
        </Link>
      </li>
      <li className="item">
        <Link className="link" to={AppRoutes.startOneFromAnotherRxJS.path}>
          RxJS
        </Link>
      </li>
    </ul>
  </div>
);

export default StartOneFromAnotherNavBar;
