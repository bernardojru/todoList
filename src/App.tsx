import { Container, Tasks, Info, ListTask } from "./styles/styles";

import { FormEvent, ChangeEvent, useState, useEffect } from "react";

import { Empty } from "./components/Empty";

import { Header } from "./components/Header";
import { Task } from "./components/Task";

export interface ITasks {
  id: string;
  title: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<ITasks[]>([]);
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  function handleAddTask(taskTitle: string) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  }

  function handleDeleteTaskById(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function handleToggleTaskCompletedById(taskId: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasks(newTasks);
  }

  return (
    <Container>
      <Header handleAddTask={handleAddTask} />

      <Tasks>
        <Info>
          <div>
            <p>Tarefas criadas</p>
            <span>{tasksQuantity}</span>
          </div>
          <div>
            <p className="textPurple">Concluídas</p>
            <span>
              {completedTasks} de {tasksQuantity}
            </span>
          </div>
        </Info>
        <ListTask>
          {tasks.length > 0 ? (
            <>
              {tasks.map((task) => (
                <Task
                  handleToggleTaskCompletedById={handleToggleTaskCompletedById}
                  handleDeleteTaskById={handleDeleteTaskById}
                  key={task.id}
                  task={task}
                />
              ))}
            </>
          ) : (
            <Empty />
          )}
        </ListTask>
      </Tasks>
    </Container>
  );
}