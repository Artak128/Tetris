import styled from "styled-components";

export const StyledCell = styled.div`
  width: auto;
  background: rgba(${(props) => props.color}, 0.8);
`;

StyledCell.defaultProps = {
  color: "255, 255, 255",
};
