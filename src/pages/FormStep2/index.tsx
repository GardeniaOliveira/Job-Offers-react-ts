import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as C from "./styles";
import { Theme } from "../../components/Theme";
import { useForm, FormActions } from "../../contexts/FormContext";
import { SelectOptions } from "../../components/SelectOptions";
import { setMaxListeners } from "events";

export const FormStep2 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === "") {
      navigate("/");
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2,
      });
    }
  }, []);

  const handleNextStep = () => {
    navigate("/step3");
  };

  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level,
    });
  };
  return (
    <Theme>
      <C.Container>
        <p>Step 2/3 </p>
        <h1>{state.name}, what best describes you?</h1>

        <p>Choose your level:</p>
        <hr />
        <SelectOptions
          title="I'm beginner"
          description="I'm a developer for less than two years"
          icon="🥳"
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />

        <SelectOptions
          title="I'm Developer"
          description="I've been programming for 2 years or more"
          icon="😎"
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        />
        <button>
          {" "}
          <Link to="/" className="backBtn">
            Previous
          </Link>{" "}
        </button>
        <button onClick={handleNextStep}>Next</button>
      </C.Container>
    </Theme>
  );
};
