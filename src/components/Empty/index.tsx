import { Container } from "./styles";

export function Empty() {
  return (
    <Container>
      <img src='/Clipboard.svg' alt="clipboardImg" />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <br />
        <span> Crie tarefas e organize seus itens a fazer</span>
      </p>
    </Container>
  );
}
