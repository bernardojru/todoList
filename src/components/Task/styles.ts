import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: var(--gray-500);
  margin: 0.5rem;
  height: 4.5rem;
  padding: 0 20px;

  border-radius: 6px;
`;

export const Complete = styled.div<{ done: boolean }>`
  cursor: pointer;
  border-radius: 50%;
  border: ${(props) => (props.done ? "none" : `1px solid var(--blue)`)};
  padding: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.done ? `var(--purple-dark)` : "")};

  > svg {
    position: absolute;
  }
`;

export const Item = styled.div<{ done: boolean }>`
  text-align: start;
  padding-left: 1rem;
  width: 100%;
  text-decoration: ${(props) => (props.done ? "line-through" : "initial")};
`;

export const TrashIcon = styled.div`
  cursor: pointer;
`;
