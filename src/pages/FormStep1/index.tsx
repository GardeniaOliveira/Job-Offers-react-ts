import { ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as C from "./styles";
import { Theme } from "../../components/Theme";
import { useForm, FormActions } from "../../contexts/FormContext";

export const FormStep1 = () => {
  const navigate = useNavigate();
  //state has the data and dispatch changes the data
  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1,
    });
  }, []);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      //store what the user typed
      payload: e.target.value,
    });
  };

  const handleNextStep = () => {
    if (state.name !== "") {
      navigate("/step2");
    } else {
      alert("Please enter your name");
    }
  };

  return (
    <Theme>
      <C.Container>
        <p>Step 1/3 </p>
        <h1>Let's start with your name</h1>

        <p>Fill in the field below with your name </p>
        <hr />
        <label>
          Full name:
          <input
            type="text"
            autoFocus={true}
            value={state.name}
            onChange={handleNameChange}
          />
        </label>
        <button onClick={handleNextStep}>Next</button>
      </C.Container>
    </Theme>
  );
};
