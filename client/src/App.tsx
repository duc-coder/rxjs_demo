import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import { AppRoutes } from "./routes";

export interface Props {
  children?: JSX.Element;
}

function App() {
  const routes = createBrowserRouter(Object.values(AppRoutes));

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
