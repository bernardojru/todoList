import { Container, InputArea } from "./styles";

import todoLogo from "../../assets/Logo.svg";
import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";

interface HeaderProps {
  handleAddTask: (taskTitle: string) => void;
}

export function Header({ handleAddTask }: HeaderProps) {
  const [title, setTitle] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    handleAddTask(title);
    setTitle("");
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }
  return (
    <Container>
      <img src={todoLogo} />

      <InputArea onSubmit={handleSubmit}>
        <input
          required
          type="text"
          placeholder="Adicionar uma nova tarefa"
          onChange={onChangeTitle}
          value={title}
        />
        <button>
          Criar
          <PlusCircle size={20} />
        </button>
      </InputArea>
    </Container>
  );
}
