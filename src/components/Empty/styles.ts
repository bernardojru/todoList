import styled from "styled-components";

export const Container = styled.div`
  padding: 3rem;
  border-radius: 6px;
  border-top: 1px solid var(--gray-300);


  display: flex;
  align-items: center;
  flex-direction: column;
  color: var(--gray-300);

  > p {
    margin-top: 1rem;
    text-align: center;
  }
`;
