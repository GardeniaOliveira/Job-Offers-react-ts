import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as C from "./styles";
import { Theme } from "../../components/Theme";
import { Footer } from "../../components/Footer";
import { useForm, FormActions } from "../../contexts/FormContext";
import { SelectOptions } from "../../components/SelectOptions";

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
  }, [dispatch, navigate, state.name]);

  const handleNextStep = () => {
    navigate("/step3");
  };

  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level,
    });
  };
  const setTitle = (title: string) => {
    dispatch({
      type: FormActions.setTitle,
      payload: title,
    });
  };

  return (
    <>
      <Theme>
        <C.Container>
          <p>Step 2/3 </p>
          <h1>{state.name}, what best describes you?</h1>

          <p>Choose your level:</p>
          <hr />
          <SelectOptions
            title="I'm Junior"
            description="I'm a developer for less than two years"
            icon="🥳"
            selected={state.level === 0}
            onClick={() => {
              setLevel(0);
              setTitle("Junior");
            }}
          />

          <SelectOptions
            title="I'm Mid"
            description="I've been programming for 3 years or more"
            icon="😎"
            selected={state.level === 1}
            onClick={() => {
              setLevel(1);
              setTitle("Mid");
            }}
          />

          <SelectOptions
            title="I'm Senior"
            description="I've been programming for 6 years or more"
            icon="😎"
            selected={state.level === 2}
            onClick={() => {
              setLevel(2);
              setTitle("Senior");
            }}
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
      <Footer />
    </>
  );
};
