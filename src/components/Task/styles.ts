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

interface isCompletedProps {
  done: boolean
}

export const Complete = styled.div<isCompletedProps>`
  cursor: pointer;
  border-radius: 50%;
  border: ${({done}) => (done ? "none" : `1px solid var(--blue)`)};
  padding: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({done}) => (done ? `var(--purple-dark)` : "")};
  transition: all ease .3s;

  
  :hover {
    background: ${({done}) => (done ? `var(--purple)` : `var(--blue-dark)`)};

  }

  > svg {
    position: absolute;
  }
`;

export const Item = styled.div<isCompletedProps>`
  text-align: start;
  padding-left: 1rem;
  width: 100%;
  text-decoration: ${({done}) => (done ? "line-through" : "initial")};
`;

export const TrashIcon = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 4px;

  color: var(--gray-300);

  cursor: pointer;

  :hover {
    background: var(--gray-400);
    
  }
  > svg:hover {
    color: var(--danger);
  }
`;
