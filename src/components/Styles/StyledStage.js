import styled from "styled-components";

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(${props => props.height});
  grid-template-columns: repeat(${props => props.width}, 1fr);
  border: 0.188rem solid rgba(241, 241, 241, 0.3);
  border-radius: 12px;
  background: #111;
`;
