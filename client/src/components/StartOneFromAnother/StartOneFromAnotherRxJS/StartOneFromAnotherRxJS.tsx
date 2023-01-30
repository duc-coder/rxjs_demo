import { useState } from "react";
import { from } from "rxjs/internal/observable/from";
import { map } from "rxjs/internal/operators/map";
import { cloneDeep, map as LOMap } from "lodash";
import { httpService } from "../../../services/httpService";
import "./StartOneFromAnotherRxJS.scss";
import { catchError } from "rxjs/internal/operators/catchError";
import { Player } from "@lottiefiles/react-lottie-player";
import {
  RETRY_COUNT_HTTP_REQUEST_FAIL,
  RETRY_DELAY_HTTP_REQUEST_FAIL,
  TIMEOUT_MAX,
} from "../../../utils/contants";
import { OperatorFunction, retry } from "rxjs";
import { of } from "rxjs/internal/observable/of";
import { defer } from "rxjs/internal/observable/defer";
import { toArray } from "rxjs/internal/operators/toArray";
import { switchMap } from "rxjs/internal/operators/switchMap";
import { concatAll } from "rxjs/internal/operators/concatAll";

interface ICompany {
  id: number;
  name: string;
  isPopularCompany: boolean;
}

interface IJob {
  id: number;
  name: string;
  companyId: number;
}

const StartOneFromAnotherRxJs = () => {
  const [companies, setCompanies] = useState<Array<ICompany>>();
  const [isLoadingCompanies, setIsLoadingCompanies] = useState(false);
  const [companyErrorMsg, setCompanyErrorMsg] = useState<string>();

  const [jobs, setJobs] = useState<Array<IJob>>();
  const [isLoadingJobs, setIsLoadingJobs] = useState(false);
  const [jobErrorMsg, setJobErrorMsg] = useState<string>();

  const defaultFormValues = {
    email: "",
    companyId: "",
    jobId: "",
  };
  const [formValues, setFormValues] = useState(defaultFormValues);
  const [subcribeMsg, setSubcribeMsg] = useState<string>();

  const loadingElement = (
    <Player
      className="loading-company-spinner"
      src={"https://assets10.lottiefiles.com/packages/lf20_p8bfn5to.json"}
      loop={true}
      autoplay={true}
      style={{ height: "70px", width: "70px" }}
    ></Player>
  );

  const getCompanies = () => {
    setIsLoadingCompanies(true);
    console.time("getCompanies");
    defer(() => from(httpService.get("company")))
      .pipe(
        retry({
          count: RETRY_COUNT_HTTP_REQUEST_FAIL,
          delay: RETRY_DELAY_HTTP_REQUEST_FAIL,
        }),
        map((response) => response.data),
        catchError((error) => {
          throw error;
        }),
        concatAll() as OperatorFunction<any, ICompany>
      )
      .pipe(
        switchMap((company) => {
          const cloneCompany = cloneDeep(company);
          defer(() => from(httpService.get(`popularCompany/${company.id}`)))
            .pipe(
              retry({
                count: RETRY_COUNT_HTTP_REQUEST_FAIL,
                delay: RETRY_DELAY_HTTP_REQUEST_FAIL,
              }),
              map((response) => response.data)
            )
            .subscribe({
              next(value) {
                Object.assign(cloneCompany, {
                  isPopularCompany: value,
                });
              },
            });
          return of(cloneCompany);
        }),
        toArray()
      )
      .subscribe({
        next(value) {
          setCompanies(value);
          console.timeEnd("getCompanies");
          companyErrorMsg && setCompanyErrorMsg(undefined);
          setTimeout(() => setIsLoadingCompanies(false), TIMEOUT_MAX);
        },
        error(_err) {
          setCompanyErrorMsg("Cannot get companies list, please try again.");
          setTimeout(() => setIsLoadingCompanies(false), TIMEOUT_MAX);
        },
      });
  };

  const getJobTitles = (companyId: number) => {
    setIsLoadingJobs(true);

    defer(() => from(httpService.post("job", { companyId })))
      .pipe(
        map((response) => response.data),
        catchError((error) => {
          throw error;
        })
      )
      .subscribe({
        next(value) {
          setJobs(value);
          jobErrorMsg && setJobErrorMsg(undefined);
          setTimeout(() => setIsLoadingJobs(false), TIMEOUT_MAX);
        },
        error() {
          setJobErrorMsg("Cannot get jobs list, please try again.");
          setTimeout(() => setIsLoadingJobs(false), TIMEOUT_MAX);
        },
      });
  };

  const renderCompanies = () => {
    const mapCompany = (item: ICompany) => {
      return (
        <option key={item.id} value={item.id}>
          {item.name} {item.isPopularCompany && " - Best company 2023"}
        </option>
      );
    };

    return LOMap(companies, mapCompany);
  };

  const renderJobs = () => {
    const mapJob = (item: IJob) => (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    );

    return LOMap(jobs, mapJob);
  };

  const submit = (e: any) => {
    e.preventDefault();

    defer(() => from(httpService.post("user-subcribe", formValues)))
      .pipe(
        retry({
          count: RETRY_COUNT_HTTP_REQUEST_FAIL,
          delay: RETRY_DELAY_HTTP_REQUEST_FAIL,
        }),
        catchError((error) => {
          throw error;
        })
      )
      .subscribe({
        next(_value) {
          setSubcribeMsg("Subcribe succeed!");
          resetForm();
        },
        error(_err) {
          setSubcribeMsg("Subcribe failed!");
        },
      });
  };

  const resetForm = () => {
    setFormValues(defaultFormValues);
    setCompanies(undefined);
    setJobs(undefined);
  };

  return (
    <div className="StartOneFromAnotherPromise">
      <form onSubmit={(e) => submit(e)}>
        <div className="form-item">
          <p className="label">User email</p>
          <input
            name="email"
            type="text"
            value={formValues.email}
            onChange={(e) =>
              setFormValues({ ...formValues, email: e.target.value })
            }
          />
        </div>
        <div className="form-item company-select-container">
          <p className="label">Select company</p>
          <select
            className={`${companyErrorMsg && "company-select-error"}`}
            value={formValues.companyId}
            name="company"
            onFocus={() => !companies && getCompanies()}
            onChange={(e) => {
              getJobTitles(Number(e.target.value));
              setFormValues({ ...formValues, companyId: e.target.value });
            }}
          >
            <option value="" hidden>
              Unselect company
            </option>
            {!isLoadingCompanies && renderCompanies()}
          </select>
          {companyErrorMsg && <p className="error-msg">{companyErrorMsg}</p>}
          {isLoadingCompanies && loadingElement}
        </div>
        <div className="form-item">
          <p className="label">Select job title</p>
          <select
            className={`${jobErrorMsg && "job-select-error"}`}
            value={formValues.jobId}
            name="jobTitle"
            disabled={!jobs}
            onChange={(e) => {
              setFormValues({ ...formValues, jobId: e.target.value });
            }}
          >
            <option value="" hidden>
              Unselect job
            </option>
            {!isLoadingJobs && renderJobs()}
          </select>
          {jobErrorMsg && <p className="error-msg">{jobErrorMsg}</p>}
          {isLoadingJobs && loadingElement}
        </div>
        <div className="form-item">
          <button type="submit" className="submit-btn">
            Subcribe
          </button>
        </div>
      </form>
      {subcribeMsg && <p className="subcribe-msg">{subcribeMsg}</p>}
    </div>
  );
};

export default StartOneFromAnotherRxJs;
