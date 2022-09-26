import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  height: 12.5rem;

  position: relative;

  background: var(--gray-700);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputArea = styled.form`
  height: 3.375rem;
  position: absolute;
  bottom: calc(-3.375rem / 2);
  width: 100%;
  max-width: 46rem;
  display: flex;
  gap: 0.5rem;
  padding: 0 1rem;

  > input {
    height: 100%;
    flex: 1;
    color: var(--gray-100);
    background: var(--gray-500);
    border: 1px solid var(--gray-700);
    border-radius: 0.5rem;
    padding: 0 1rem;
    font-size: 1rem;
    outline: none;

    :focus {
      border: 1px solid var(--purple-dark);
    }
    ::placeholder {
      color: var(--gray-300);
    }
  }

  > button {
    height: 100%;
    padding: 0 1rem;
    background: var(--blue-dark);
    color: var(--gray-100);
    border: none;
    border-radius: 0.5rem;

    display: flex;
    align-items: center;
    gap: 0.375rem;
    font-weight: 700;
    font-size: 0.875rem;

    transition: all ease .3s;

    :hover {
      background: var(--blue);
    }
  }
`;
