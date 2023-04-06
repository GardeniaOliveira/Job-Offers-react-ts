import styled from "styled-components";

export const Container = styled.div`
  margin: 30px 0;
  cursor: pointer;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
`;

export const Info = styled.div`
  flex: 1;
  margin-right: 20px;
`;

export const Title = styled.div`
  text-align: right;
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 16px;
  color: #fff;
`;

export const Description = styled.div`
  font-size: 14px;
  text-align: right;
  color: #b8b8d4;
`;

export const IconArea = styled.div<{ active: boolean }>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.active ? "#25cd89" : "rgb(22, 25, 92)"};
`;

export const Point = styled.div<{ active: boolean }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: 3px solid rgb(22, 25, 92);
  margin: 0 -6px 0 30px;
  background-color: ${(props) => (props.active ? "#25cd89" : "#02044a")};
`;
