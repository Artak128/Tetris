import styled from "styled-components";

export const StyledDisplay = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 1.25rem;
  border: 0.25rem solid #333;
  border-radius: 12px;
  color: ${props => (props.gameOver ? "red" : "#999")};
  background: #000;
  font-family: Roboto;

  span {
    font-size: 0.8rem;
  }
`;
