//Context, Reducer, Provider, Hook

import { createContext, useContext, useReducer } from "react";

//Context

const Context = createContext(undefined);

//reducer
enum FormAction {
  setCurrentStep,
  setName,
  setLevel,
  setEmail,
  setGithub,
}
const FormReducer = (state, action) => {
  switch (action.type) {
    case FormAction.setCurrentStep:
      //pass the initial state (...state) to the action and return the state after the action
      return { ...state, currentStep: action.payload };

    case FormAction.setName:
      return { ...state, name: action.payload };

    case FormAction.setLevel:
      return { ...state, level: action.payload };

    case FormAction.setEmail:
      return { ...state, email: action.payload };

    case FormAction.setGithub:
      return { ...state, github: action.payload };

    default:
      return state;
  }
};
