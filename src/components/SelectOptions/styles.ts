import styled from "styled-components";

export const Container = styled.button<{ selected: boolean }>`
  width: 100%;
  background-color: rgb(2, 6, 23);
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  text-align: left;
  border: 2px solid
    ${(props) => (props.selected ? "rgb(37, 205, 137)" : "#16195c")};
  border-radius: 10px;
  padding: 20px;
  cursor: pointer;

  &:hover {
    border: 2px solid rgb(37, 205, 137);
  }
`;

export const Icon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: rgb(22, 25, 92);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
`;

export const Info = styled.div`
  margin-left: 14px;
  flex: 1;
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 6px;
  color: #b8b8d4;
`;

export const Description = styled.div`
  font-size: 14px;
  color: #b8b8d4;
`;
