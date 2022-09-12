import { Container, Complete, Item, TrashIcon } from "./styles";

import { Trash, Check } from "phosphor-react";

interface Item {
  item: string;
  onDeleComment: (taskToDelete: string) => void;
  handleCheckTask: () => void
  isComplete: boolean
}

export function Task({ item, onDeleComment, handleCheckTask, isComplete }: Item) {
    
    function handleDeleComment() {
        onDeleComment(item);
    }
   
  return (
    <Container>
      <Complete done={isComplete} onClick={handleCheckTask}>
        {isComplete && <Check />}
      </Complete>
      <Item done={isComplete}>{item}</Item>
      <TrashIcon onClick={handleDeleComment}>
        <Trash size={24} />
      </TrashIcon>
    </Container>
  );
}