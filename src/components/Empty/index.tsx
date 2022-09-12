import { Container } from "./styles";

import clipboardImg from "../../assets/clipboard.svg";

export function Empty() {
  return (
    <Container>
      <img src={clipboardImg} alt="clipboardImg" />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <br />
        <span> Crie tarefas e organize seus itens a fazer</span>
      </p>
    </Container>
  );
}
