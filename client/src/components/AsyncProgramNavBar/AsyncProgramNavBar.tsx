import { Link } from "react-router-dom";
import { AppRoutes } from "../../routes";
import "./AsyncProgramNavBar.scss";

const AsyncProgramNavBar = () => {
  return (
    <div className="AsyncProgramNavBar">
      <ul className="content-list">
        <li className="item">
          <Link className="link" to={AppRoutes.startOneFromAnother.path}>
            Start one after another
          </Link>
        </li>
        <li className="item">
          <Link className="link" to={AppRoutes.combineAsyncResults.path}>
            Combine async results
          </Link>
        </li>
        <li className="item">
          <Link className="link" to={AppRoutes.recalculate.path}>
            Recaculate displayed data
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AsyncProgramNavBar;
