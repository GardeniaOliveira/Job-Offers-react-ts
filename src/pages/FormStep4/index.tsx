import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as C from "./styles";
import { Theme } from "../../components/Theme";
import { Footer } from "../../components/Footer";
import { useForm, FormActions } from "../../contexts/FormContext";
import jobSearchApi from "../../data/jobSearchApi";

export const FormStep4 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();
  const [jobs, setJobs] = useState<any[]>([]);
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
      </Theme>

      <C.CardContainer>
        <C.Title2> Job offers</C.Title2>

        {jobs.map((job) => (
          <C.Card>
            <p className="job-title">{job.job_title}</p>
            <p className="description">
              Description : <span>{job.job_description}</span>{" "}
            </p>
            <p>
              Type : <span>{job.job_employment_type}</span>{" "}
            </p>

            <p>
              Company : <span>{job.employer_name}</span>{" "}
            </p>
            <p>
              Location : {<span>{job.job_city}</span>} -
              {<span>{job.job_country}</span>}
            </p>

            <p>
              URL :<a href="">{job.job_apply_link}</a>
            </p>
          </C.Card>
        ))}
      </C.CardContainer>
      <Footer />
    </>
  );
};
