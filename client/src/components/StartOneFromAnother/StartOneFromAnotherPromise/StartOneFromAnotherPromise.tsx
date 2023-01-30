import { useState } from "react";
import { from } from "rxjs/internal/observable/from";
import { map } from "rxjs/internal/operators/map";
import { map as LOMap } from "lodash";
import { httpService } from "../../../services/httpService";
import "./StartOneFromAnotherPromise.scss";
import { catchError } from "rxjs/internal/operators/catchError";
import { Player } from "@lottiefiles/react-lottie-player";
import { TIMEOUT_MAX } from "../../../utils/contants";

interface ICompany {
  id: number;
  name: string;
}

interface IJob {
  id: number;
  name: string;
  companyId: number;
}

const StartOneFromAnotherPromise = () => {
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

  const getCompanies = async () => {
    setIsLoadingCompanies(true);

    const mapCompanyData = (item: ICompany) => {
      const popularCompanies2023 = [1, 3];
      return {
        ...item,
        name: popularCompanies2023.includes(item.id)
          ? `${item.name} - Best company 2023`
          : item.name,
      };
    };
    console.time("getCompanies");
    await httpService
      .get("company")
      // .then((res) => LOMap(res.data, mapCompanyData))
      .then((res) => {
        setCompanies(res.data);
        console.timeEnd("getCompanies");
        companyErrorMsg && setCompanyErrorMsg(undefined);
        setTimeout(() => setIsLoadingCompanies(false), TIMEOUT_MAX);
      })
      .catch((_err) => {
        setCompanyErrorMsg("Cannot get companies list, please try again.");
        setTimeout(() => setIsLoadingCompanies(false), TIMEOUT_MAX);
      });
  };

  const getJobTitles = async (companyId: number) => {
    setIsLoadingJobs(true);

    await httpService.post("job", { companyId });
  };

  const renderCompanies = () => {
    const mapCompany = (item: ICompany) => (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    );

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

    from(httpService.post("user-subcribe", formValues))
      .pipe(
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
            {companies && renderCompanies()}
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
            {jobs && renderJobs()}
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

export default StartOneFromAnotherPromise;
