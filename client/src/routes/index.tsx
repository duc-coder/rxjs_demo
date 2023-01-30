import Layout from "../components/Layout/Layout";
import StartOneFromAnother from "../components/StartOneFromAnother/StartOneFromAnother";
import StartOneFromAnotherPromise from "../components/StartOneFromAnother/StartOneFromAnotherPromise/StartOneFromAnotherPromise";
import StartOneFromAnotherRxJs from "../components/StartOneFromAnother/StartOneFromAnotherRxJS/StartOneFromAnotherRxJS";
import AsyncProgram from "../pages/AsyncProgram/AsyncProgram";
import Home from "../pages/Home/Home";

const PAGE_PATH_NAME = {
  home: "",
  async: "async-programming",
  rxjs: "rxjs",
  observable: "observable",
  operator: "operator",
  startOneFromAnother: "start-one-after-another",
  combineAsyncResults: "combine-async-results",
  recalculate: "recalculate-data",
  promise: "promise",
};

export const AppRoutes = {
  home: {
    path: `/${PAGE_PATH_NAME.home}`,
    element: <Layout children={<Home />} />,
  },
  async: {
    path: `/${PAGE_PATH_NAME.async}`,
    element: <Layout children={<AsyncProgram />} />,
  },
  startOneFromAnother: {
    path: `/${PAGE_PATH_NAME.async}/${PAGE_PATH_NAME.startOneFromAnother}`,
    element: (
      <Layout children={<AsyncProgram children={<StartOneFromAnother />} />} />
    ),
  },
  startOneFromAnotherPromise: {
    path: `/${PAGE_PATH_NAME.async}/${PAGE_PATH_NAME.startOneFromAnother}/${PAGE_PATH_NAME.promise}`,
    element: (
      <Layout
        children={
          <AsyncProgram
            children={
              <StartOneFromAnother children={<StartOneFromAnotherPromise />} />
            }
          />
        }
      />
    ),
  },
  startOneFromAnotherRxJS: {
    path: `/${PAGE_PATH_NAME.async}/${PAGE_PATH_NAME.startOneFromAnother}/${PAGE_PATH_NAME.rxjs}`,
    element: (
      <Layout
        children={
          <AsyncProgram
            children={
              <StartOneFromAnother children={<StartOneFromAnotherRxJs />} />
            }
          />
        }
      />
    ),
  },
  combineAsyncResults: {
    path: `/${PAGE_PATH_NAME.async}/${PAGE_PATH_NAME.combineAsyncResults}`,
    element: (
      <Layout children={<AsyncProgram children={<StartOneFromAnother />} />} />
    ),
  },
  recalculate: {
    path: `/${PAGE_PATH_NAME.async}/${PAGE_PATH_NAME.recalculate}`,
    element: (
      <Layout children={<AsyncProgram children={<StartOneFromAnother />} />} />
    ),
  },
  rxjs: {
    path: `/${PAGE_PATH_NAME.rxjs}`,
    element: <Layout children={<Home />} />,
  },
  observable: {
    path: `/${PAGE_PATH_NAME.observable}`,
    element: <Layout children={<Home />} />,
  },
  operator: {
    path: `/${PAGE_PATH_NAME.operator}`,
    element: <Layout children={<Home />} />,
  },
};
