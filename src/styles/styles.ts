import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

`;

export const Tasks = styled.div`
  width: 100%;
  max-width: 46rem;
  margin: 0 auto;
  margin-top: 5.625rem;
  padding: 0 1rem;
`;

export const Info = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 1.5rem;

div {
  display: flex;
  align-items: center;
  gap: 0.8rem;

  p {
    color: var(--blue);
    font-size: 0.875rem;
    font-weight: 700;
  }

  .textPurple {
    color: var(--purple);
  }

  span {
    background: var(--gray-400);
    color: var(--gray-200);
    padding: 3px 9px;
    border-radius: 999px;
    font-size: 0.75rem;
    font-weight: 700;
  }
}
`;

export const ListTask = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;
