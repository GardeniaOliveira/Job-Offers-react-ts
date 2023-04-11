import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as C from "./styles";
import { Theme } from "../../components/Theme";
import { Footer } from "../../components/Footer";
import { useForm, FormActions } from "../../contexts/FormContext";
import { validEmail } from "../../utils/Regex";

export const FormStep3 = () => {
  const navigate = useNavigate();
  //state has the data and dispatch changes the data
  const { state, dispatch } = useForm();
  const [_, setEmailErr] = useState(false);

  useEffect(() => {
    if (state.name === "") {
      navigate("/");
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3,
      });
    }
  }, [dispatch, navigate, state.name]);

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
      if (!validEmail.test(state.email)) {
        setEmailErr(true);
        alert("Please enter a valid email");
      } else {
        console.log(state);
        navigate("/step4");
      }
    } else {
      alert("Please, type the fields below");
    }
  };

  return (
    <>
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
              placeholder="example@example.com"
              value={state.email}
              onChange={handleEmailChange}
            />
          </label>

          <label>
            Your GitHub:
            <div className="github">
              <span className="url-github">https://github.com/ </span>
              <input
                className="input-github"
                type="url"
                value={state.github}
                onChange={handleGithubChange}
              />
            </div>
          </label>

          <button>
            {" "}
            <Link to="/step2" className="backBtn">
              Previous
            </Link>{" "}
          </button>
          <button onClick={handleNextStep}>Finish</button>
        </C.Container>
      </Theme>
      <Footer />
    </>
  );
};
