import styled from "styled-components";

export const Container = styled.div`
  max-width: 1500px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0rem 2rem;
  display: ${(props) => props.flex && "flex"};
  flex-direction: ${(props) => (props.column ? "column" : "row")}
  justify-content: ${(props) => (props.center ? "center" : "space-between")};
  align-items: center;
`;
