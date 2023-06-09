import styled from "styled-components";

export const Container = styled.div`
  background-color: #020617;
  color: #fff;
  min-height: 100vh;
`;

export const Area = styled.div`
  margin: auto;
  max-width: 980px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Steps = styled.div`
  flex: 1;
  display: flex;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Sidebar = styled.div`
  width: 250px;
  border-right: 1px solid #16195c;
  @media (max-width: 960px) {
    width: 100%;
    display: flex;
    border-bottom: 1px solid #16195c;
    justify-content: space-around;
  }
`;

export const Page = styled.div`
  flex: 1;
  padding: 40px 0 0 40px;
  @media (max-width: 960px) {
    padding: 20px;
  }
`;
