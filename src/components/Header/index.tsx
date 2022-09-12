import { Container } from "./styles";

import todoLogo from "../../assets/Logo.svg";

export function Header() {
  return (
    <Container>
      <img src={todoLogo} alt="Logo do Todo" />
    </Container>
  );
}
