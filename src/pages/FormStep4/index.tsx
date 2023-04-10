import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as C from "./styles";
import { Theme } from "../../components/Theme";
import { Footer } from "../../components/Footer";
import { useForm, FormActions } from "../../contexts/FormContext";
import jobSearchApi, { Job } from "../../data/jobSearchApi";

export const FormStep4 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();
  const [jobs, setJobs] = useState<Job[]>([]);
  console.log(jobs);
  useEffect(() => {
    if (state.name === "") {
      navigate("/");
    } else if (state.email === "" || state.github === "") {
      navigate("/step3");
    } else if (state.title === "Junior") {
      jobSearchApi("junior developer").then((response: any) => {
        setJobs(response.data);
      });
    } else if (state.title === "Mid") {
      jobSearchApi("mid developer").then((response: any) => {
        setJobs(response.data);
      });
    } else if (state.title === "Senior") {
      jobSearchApi("senior developer").then((response: any) => {
        setJobs(response.data);
      });
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 4,
      });
    }
  }, [dispatch, navigate, state.email, state.github, state.name]);

  return (
    <>
      <Theme>
        <C.Container>
          <h1>Your Profile </h1>

          <p>
            Name : <span>{state.name}</span>{" "}
          </p>
          <p>
            Level :<span> {state.title}</span>{" "}
          </p>
          <p>
            Email :<span> {state.email}</span>{" "}
          </p>
          <p>
            GitHub :<span> {state.github}</span>{" "}
          </p>
        </C.Container>

        <C.CardContainer>
          <C.Title2>Offers for your level:</C.Title2>
          {jobs.length <= 0 && (
            <div className="loading">
              <img
                src="https://i.pinimg.com/originals/49/23/29/492329d446c422b0483677d0318ab4fa.gif"
                alt="Loading..."
              />
            </div>
          )}
          {jobs.map((job, key) => (
            <C.Card key={key}>
              <p className="job-title">{job.job_title}</p>
              <p className="description">
                Description : <span>{job.job_description}</span>{" "}
              </p>

              {job.job_benefits ? (
                <p>
                  Benefits:
                  <span> {job.job_benefits?.join(", ")}</span>
                </p>
              ) : null}
              <p>
                Type : <span>{job.job_employment_type}</span>{" "}
              </p>

              <p>
                Company : <span>{job.employer_name}</span>{" "}
              </p>
              {job.job_city ? (
                <p>
                  Benefits:
                  <span>
                    {" "}
                    {job.job_city} - {job.job_country}
                  </span>
                </p>
              ) : (
                <p>
                  Benefits:
                  <span> {job.job_country}</span>
                </p>
              )}

              <p>
                Apply Link :
                <a href={job.job_apply_link}>{job.job_apply_link}</a>
              </p>
            </C.Card>
          ))}
        </C.CardContainer>
      </Theme>
      <Footer />
    </>
  );
};
