import Home from "../components/Home/Home";

export const AppRoutes = {
  home: {
    path: "/",
    element: <Home />,
  },
  async: {
    path: "/async-programming",
    element: <Home />,
  },
  rxjs: {
    path: "/rxjs",
    element: <Home />,
  },
  observable: {
    path: "/observable",
    element: <Home />,
  },
  operator: {
    path: "/operator",
    element: <Home />,
  },
};
