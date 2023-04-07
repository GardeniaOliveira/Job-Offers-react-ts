import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as C from "./styles";
import { Theme } from "../../components/Theme";
import { useForm, FormActions } from "../../contexts/FormContext";

export const FormStep4 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === "") {
      navigate("/");
    } else if (state.email === "" || state.github === "") {
      navigate("/step3");
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 4,
      });
    }
  }, []);

  return (
    <Theme>
      <C.Container>
        <h1>Your Profile </h1>

        <p>
          Name : <span>{state.name}</span>{" "}
        </p>
        <p>
          Level :<span> {state.level}</span>{" "}
        </p>
        <p>
          Email :<span> {state.email}</span>{" "}
        </p>
        <p>
          GitHub :<span> {state.github}</span>{" "}
        </p>
      </C.Container>
    </Theme>
  );
};
