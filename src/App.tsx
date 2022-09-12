import { Container, InputArea, Tasks, Info, ListTask } from "./styles/styles";

import { FormEvent, ChangeEvent, useState, useEffect } from "react";

import { PlusCircle } from "phosphor-react";
import { Empty } from "./components/Empty";

import { Header } from "./components/Header";
import { Task } from "./components/Task";

interface ITasks {
  id: number;
  title: string;
  isComplete: boolean;
}

export function App() {
  const [task, setTask] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");
  const [counterTask, setCounterTask] = useState(0);
  const [done, setDone] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  function handleCreateNewTask(e: FormEvent) {
    e.preventDefault();

    setTask([...task, newTask]);

    setNewTask("");
  }

  function handleNewTaskChange(e: any) {
    setNewTask(e.target.value);
  }

  useEffect(() => {
    function handleCreatedCounterTask() {
      if (task.length > 0 && task.length >= 0) {
        setCounterTask(counterTask + 1);
      } else if (task.length === 0) {
        setCounterTask(0);
      }
    }
    handleCreatedCounterTask();
  }, [task]);

  function handleCheckTask() {
    setIsComplete((prev) => !prev);
  }

  function deleteTask(taskToDelete: string) {
    const taskDeleteOne = task.filter((i) => {
      return i !== taskToDelete;
    });
    setTask(taskDeleteOne);
  }

  return (
    <Container>
      <Header />

      <InputArea onSubmit={handleCreateNewTask}>
        <input
          value={newTask}
          onChange={handleNewTaskChange}
          required
          type="text"
          placeholder="Adicionar uma nova tarefa"
        />
        <button>
          Criar
          <PlusCircle size={16} />
        </button>
      </InputArea>

      <Tasks>
        <Info>
          <p>
            Tarefas criadas <span>{counterTask}</span>
          </p>
          <p>
            Concluídas <span>{done}</span>
          </p>
        </Info>
        <ListTask>
          {task.length > 0 ? (
            <>
              {task.map((item, index) => (
                <Task
                  key={index}
                  item={item}
                  onDeleComment={deleteTask}
                  handleCheckTask={handleCheckTask}
                  isComplete={isComplete}
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
