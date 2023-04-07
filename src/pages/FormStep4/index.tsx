import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as C from "./styles";
import { Theme } from "../../components/Theme";
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
    } else {
      jobSearchApi().then((response: any) => {
        setJobs(response.data);
      });
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 4,
      });
    }
  }, [dispatch, navigate, state.email, state.github, state.name]);

  return (
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

      <h1> Job offers</h1>
      {jobs.map((job) => (
        <C.Container>
          <p>{job.job_title}</p>
          <p>
            Description : <span>{job.job_description}</span>{" "}
          </p>
          <p>
            Type : <span>{job.job_employment_type}</span>{" "}
          </p>
          <p>
            Company : <span>{job.employer_name}</span>{" "}
          </p>
          <p>
            Location : {<span>{job.job_city}</span>},
            {<span>{job.job_country}</span>}
          </p>

          <p>
            URL :<span>{job.job_apply_link}</span>{" "}
          </p>
        </C.Container>
      ))}
    </Theme>
  );
};
