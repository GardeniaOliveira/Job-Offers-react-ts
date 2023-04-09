import styled from "styled-components";

export const Container = styled.div`
  margin: 30px 0;
  cursor: pointer;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    @media (max-width: 960px) {
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      gap: 10px;
      text-align: center;
    }
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
  @media (max-width: 960px) {
    text-align: center;
  }
`;

export const Description = styled.div`
  font-size: 14px;
  text-align: right;
  color: #b8b8d4;
  @media (max-width: 960px) {
    display: none;
  }
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
  @media (max-width: 960px) {
    margin: 30px 0px -36px 0px;
  }
`;
