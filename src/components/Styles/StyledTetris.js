import styled from "styled-components";

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 2.5rem;

  aside {
    display: flex;
    flex-direction: column;
    max-width: 12.5rem;
    padding: 0 1.25rem;
    *:not(:last-child) {
      margin: 0 0 1rem 0;
    }
  }
`;
