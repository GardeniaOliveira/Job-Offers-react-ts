import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as C from "./styles";
import { Theme } from "../../components/Theme";
import { useForm, FormActions } from "../../contexts/FormContext";
import { validName } from "../../utils/Regex";
import { Footer } from "../../components/Footer";

export const FormStep1 = () => {
  const navigate = useNavigate();
  //state has the data and dispatch changes the data
  const { state, dispatch } = useForm();
  const [_, setNameErr] = useState(false);

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
      if (!validName.test(state.name)) {
        setNameErr(true);
        alert("Please, enter a valid name");
      } else {
        navigate("/step2");
      }
    } else {
      alert("Please, enter your name");
    }
  };

  return (
    <>
      <Theme>
        <C.Container>
          <p>Step 1/3 </p>
          <h1>Let's start with your name</h1>

          <p>Fill in the field below with your name </p>
          <hr />
          <label>
            Your name:
            <input
              type="text"
              placeholder="John Smith"
              autoFocus={true}
              value={state.name}
              onChange={handleNameChange}
            />
          </label>
          <C.Button onClick={handleNextStep}>Next</C.Button>
        </C.Container>
      </Theme>
      <Footer />
    </>
  );
};
