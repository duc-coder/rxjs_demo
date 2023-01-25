import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import { map } from "lodash";
import { AppRoutes } from "./routes";

export interface Props {
  children: React.ReactNode;
}

function App() {
  const mapRoutes = (
    item: (typeof AppRoutes)[keyof typeof AppRoutes],
    index: number
  ) => <Route key={index} element={item.element} path={item.path} />;

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>{map(AppRoutes, mapRoutes)}</Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
