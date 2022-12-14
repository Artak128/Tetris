import styled from "styled-components";

export const StyledCell = styled.div`
  min-width: 1rem;
  min-height: 1rem;
  background: rgba(
    ${props => (props.type === 0 ? "0,0,0," : props.color)},
    0.8
  );
  border: ${props => (props.type === 0 ? "0.2rem solid" : "0.2rem solid")};
  border-bottom-color: rgba(${props => props.color}, 0.1);
  border-right-color: rgba(
    ${props => props.color},
    ${props => (props.type === 0 ? "0.2" : "1")}
  );
  border-top-color: rgba(
    ${props => props.color},
    ${props => (props.type === 0 ? "0.2" : "1")}
  );
  border-left-color: rgba(
    ${props => props.color},
    ${props => (props.type === 0 ? "0.2" : "0.3")}
  );
`;
