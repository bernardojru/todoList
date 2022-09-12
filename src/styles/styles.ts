import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const InputArea = styled.form`
  margin-top: -27px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  > input {
    width: 638px;
    height: 54px;
    padding-left: 20px;
    background: var(--gray-500);
    color: #808080;
    border: none;
    border-radius: 6px;
  }

  > button {
    width: 90px;
    height: 52px;
    background: var(--blue-dark);
    color: var(--gray-100);
    border-radius: 6px;
    border: none;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
`;

export const Tasks = styled.div`
  margin-top: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 736px;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  > p {
    color: var(--blue);
    display: flex;
    align-items: center;
    gap: 5px;
  }

  > p > span {
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 10px;
    font-size: 0.7rem;
    width: 25px;
    height: 19px;
    color: var(--gray-200);
    background: var(--gray-400);
  }
`;

export const ListTask = styled.div`
  margin: 2rem;
  border-radius: 4px;
  width: 100%;
`;
