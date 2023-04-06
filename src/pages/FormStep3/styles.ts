import styled from "styled-components";

export const Container = styled.div`
  h1 {
    font-size: 26px;
    margin: 0;
    padding: 0;
  }
  p {
    font-size: 14px;
    color: #b8b8d4;
  }

  hr {
    height: 1px;
    border: 0;
    background-color: #16195c;
    margin: 30px 0;
  }

  label {
    font-size: 14px;
    display: block;
    margin-bottom: 20px;

    input {
      display: block;
      box-sizing: border-box;
      width: 100%;
      margin-top: 7px;
      padding: 8px;
      border: 1px solid transparent;
      border-radius: 30px;
      outline: 0;
      font-size: 16px;
      color: #020617;
    }
  }

  button {
    background-color: #25cd89;
    color: #020617;
    font-size: 14px;
    font-weight: bold;
    padding: 10px 40px;
    border: 0;
    border-radius: 30px;
    margin: 30px 30px 30px 0;
    cursor: pointer;

    .backBtn {
      text-decoration: none;
      color: rgb(22, 25, 92);
    }
  }
`;
