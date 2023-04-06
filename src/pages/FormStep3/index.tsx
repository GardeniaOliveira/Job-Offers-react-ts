import { ChangeEvent, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as C from "./styles";
import { Theme } from "../../components/Theme";
import { useForm, FormActions } from "../../contexts/FormContext";

export const FormStep3 = () => {
  const navigate = useNavigate();
  //state has the data and dispatch changes the data
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === "") {
      navigate("/");
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3,
      });
    }
  }, []);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value,
    });
  };

  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value,
    });
  };

  const handleNextStep = () => {
    if (state.email !== "" && state.github !== "") {
      console.log(state);
    } else {
      alert("Please, type the fields below");
    }
  };

  return (
    <Theme>
      <C.Container>
        <p>Step 3/3 </p>
        <h1>Nice, {state.name}. Where can we find you?</h1>

        <p>Fill in the fields below with your contacts </p>
        <hr />
        <label>
          Your email:
          <input
            type="email"
            value={state.email}
            onChange={handleEmailChange}
          />
        </label>

        <label>
          Your GitHub:
          <input
            type="url"
            value={state.github}
            onChange={handleGithubChange}
          />
        </label>

        <button>
          {" "}
          <Link to="/step2" className="backBtn">
            Previous
          </Link>{" "}
        </button>
        <button onClick={handleNextStep}>Finish registration</button>
      </C.Container>
    </Theme>
  );
};
