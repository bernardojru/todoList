import { Container, Complete, Item, TrashIcon } from "./styles";

import { Trash, Check } from "phosphor-react";
import { ITasks } from "../../App";
import { useState } from "react";

interface TaskProps {
  task: ITasks;
  handleDeleteTaskById: (taskId: string) => void;
  handleToggleTaskCompletedById: (taskId: string) => void;
}

export function Task({
  task,
  handleDeleteTaskById,
  handleToggleTaskCompletedById,

}: TaskProps) {
  function onDelete() {
    handleDeleteTaskById(task.id);
  }
  
  return (
    <Container>
      <Complete done={task.isCompleted} onClick={() => handleToggleTaskCompletedById(task.id)}>
        {task.isCompleted && <Check />}
      </Complete>
      <Item done={task.isCompleted}>{task.title}</Item>
      <TrashIcon onClick={onDelete}>
        <Trash size={24} />
      </TrashIcon>
    </Container>
  );
}
