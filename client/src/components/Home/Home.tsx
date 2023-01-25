import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../routes";

const Home = () => (
  <div className="Home" data-testid="Home">
    <p className="title">RxJS - A better asynchronous programming way</p>
    <p className="sub-title">Author: Duc Huynh - まさのり</p>
    <ul className="content-list">
      <li className="item">
        <Link className="link" to={AppRoutes.async.path}>
          Async programming
        </Link>
      </li>
      <li className="item">
        <Link className="link" to={AppRoutes.rxjs.path}>
          RxJS library
        </Link>
      </li>
      <li className="item">
        <Link className="link" to={AppRoutes.observable.path}>
          Observable
        </Link>
      </li>
      <li className="item">
        <Link className="link" to={AppRoutes.operator.path}>
          {" "}
          Operators
        </Link>
      </li>
    </ul>
  </div>
);

export default Home;
